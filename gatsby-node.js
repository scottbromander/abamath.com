const path = require(`path`);
const { correctGoogleSheetRow, validateGoogleSheetRowObject } = require('./utils/google-sheet-corrector');
const slugify = require('slugify');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField, deleteNode } = boundActionCreators
  const isMarkdownRemark = node.internal.type === `MarkdownRemark`;

  // Checking for specific google sheets
  const hasGoogleSheetFields = node.title && node.content && node.title._t && node.content._t;
  const isDistrictClass = node.internal.type === `community_education__district_classes`;
  const isOfferedClass = node.internal.type === `community_education__offered_classes`;
  const isDistrict = node.internal.type === `community_education__district`;
  const isGoogleSheetRow = isDistrictClass || isOfferedClass || isDistrict;

  // checking for valid district classes
  const correctedGoogleSheetRow = isGoogleSheetRow && hasGoogleSheetFields && correctGoogleSheetRow(node.content._t);
  const isValidDistrictClass = isDistrictClass && correctedGoogleSheetRow && validateGoogleSheetRowObject(correctedGoogleSheetRow, [
    'days',
    'description',
    'district',
    'enddate',
    'grades',
    'link',
    'startdate',
    'time'
  ]);

  // checking for valid offered classes
  const isValidOfferedClass = isOfferedClass && correctedGoogleSheetRow && validateGoogleSheetRowObject(correctedGoogleSheetRow, [
    'classgrades',
    'classdescription'
  ]);

  // checking for valid district
  const isValidDistrict = isDistrict && correctedGoogleSheetRow && validateGoogleSheetRowObject(correctedGoogleSheetRow, ['website']);

  const isValidGoogleSheetRow = isValidDistrictClass || isValidOfferedClass || isValidDistrict;

  if (isMarkdownRemark) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  } else if (isValidGoogleSheetRow) {
    const rowTitle = node.title._t;
    const pageTitle = correctedGoogleSheetRow.district ? correctedGoogleSheetRow.district + " " + rowTitle : rowTitle;
    if(isOfferedClass || isDistrictClass) {
      createNodeField({
        node,
        name: `className`,
        value: rowTitle,
      });
    } else {
      createNodeField({
        node,
        name: `districtName`,
        value: rowTitle,

      });
    }

    createNodeField({
      node,
      name: `slug`,
      value: '/' + slugify(pageTitle.toLowerCase()),
    });
    Object.entries(correctedGoogleSheetRow).forEach((entry) => {
      createNodeField({
        node,
        name: entry[0],
        value: entry[1],
      });
    });    
  } else if (isGoogleSheetRow) {
    deleteNode(node.id, node);
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const allCommunityEducationDistrictClassesPromise = new Promise((resolve, reject) => {
    graphql(`
      {
        allCommunityEducationDistrictClasses {
          totalCount
          edges {
            node {
              fields {
                days
                grades
                slug
              }
            }
          }
        }
      }    
    `).then(result => {
        result.data && result.data.allCommunityEducationDistrictClasses && result.data.allCommunityEducationDistrictClasses.edges.forEach(({ node }) => {
          if (node.fields && node.fields.slug) {
            createPage({
              path: node.fields.slug,
              component: path.resolve(`./src/templates/district-class.js`),
              context: {
                // Data passed to context is available in page queries as GraphQL variables.
                slug: node.fields.slug,
              },
            });
          }
        });
        resolve();
      });
  });

  const allCommunityEducationOfferedClassesPromise = new Promise((resolve, reject) => {
    graphql(`
          {
            allCommunityEducationOfferedClasses {
              totalCount
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
          }    
        `).then(result => {
        result.data && result.data.allCommunityEducationOfferedClasses && result.data.allCommunityEducationOfferedClasses.edges.forEach(({ node }) => {
          if (node.fields && node.fields.slug) {
            createPage({
              path: node.fields.slug,
              component: path.resolve(`./src/templates/offered-class.js`),
              context: {
                // Data passed to context is available in page queries as GraphQL variables.
                slug: node.fields.slug,
              },
            });
          }
        })
        resolve();
      });
  });

  const allCommunityEducationDistrictPromise = new Promise((resolve, reject) => {
    graphql(`
          {
            allCommunityEducationDistrict {
              totalCount
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
          }    
        `).then(result => {
        result.data && result.data.allCommunityEducationDistrict && result.data.allCommunityEducationDistrict.edges.forEach(({ node }) => {
          if (node.fields && node.fields.slug) {
            createPage({
              path: node.fields.slug,
              component: path.resolve(`./src/templates/district.js`),
              context: {
                // Data passed to context is available in page queries as GraphQL variables.
                slug: node.fields.slug,
              },
            });
          }
        })
        resolve();
      });
  });

  const allMarkdownRemarkPromise = new Promise((resolve, reject) => {
    graphql(`
          {
            allMarkdownRemark {
              totalCount
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
          }    
        `).then(result => {
        result.data && result.data.allMarkdownRemark && result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          if (node.fields && node.fields.slug) {
            createPage({
              path: node.fields.slug,
              component: path.resolve(`./src/templates/markdown-display.js`),
              context: {
                // Data passed to context is available in page queries as GraphQL variables.
                slug: node.fields.slug,
              },
            });
          }
        });
        resolve();
      })
  });

  return Promise.all([
    allCommunityEducationDistrictClassesPromise,
    allCommunityEducationOfferedClassesPromise,
    allCommunityEducationDistrictPromise,
    allMarkdownRemarkPromise
  ]);
};