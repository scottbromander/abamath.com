const path = require(`path`);
const { correctGoogleSheetRow, validateGoogleSheetRowObject } = require('./utils/google-sheet-corrector');
const slugify = require('slugify');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField, deleteNode } = boundActionCreators
  const isMarkdownRemark = node.internal.type === `MarkdownRemark`;

  // Checking for specific google sheets
  const hasGoogleSheetFields = node.title && node.content && node.title._t && node.content._t;
  const isGoogleSheetRow = node.internal.type === `community_education__district_classes` ||
  node.internal.type === `community_education__offered_classes` ||
  node.internal.type === `community_education__district`;

  // checking for valid district classes
  const correctedGoogleSheetRow = isGoogleSheetRow && hasGoogleSheetFields ? correctGoogleSheetRow(node.content._t) : null;
  const isValidDistrictClass = correctedGoogleSheetRow && validateGoogleSheetRowObject(correctedGoogleSheetRow, [
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
  const isValidOfferedClass = correctedGoogleSheetRow && validateGoogleSheetRowObject(correctedGoogleSheetRow, [
    'classgrades',
    'classdescription'
  ]);

  // checking for valid district
  const isValidDistrict = correctedGoogleSheetRow && validateGoogleSheetRowObject(correctedGoogleSheetRow, ['website']);

  if (isMarkdownRemark) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  } else if (node.internal.type === `community_education__district_classes` && isValidDistrictClass) {
    const className = node.title._t;

    createNodeField({
      node,
      name: `className`,
      value: className,
    });
    const pageTitle = correctedGoogleSheetRow.district + " " + className;
    createNodeField({
      node,
      name: `pageTitle`,
      value: pageTitle,
    });
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
  } else if (node.internal.type === `community_education__offered_classes` && isValidOfferedClass) {
    const className = node.title._t;

    createNodeField({
      node,
      name: `className`,
      value: className,
    });
    const pageTitle = className;
    createNodeField({
      node,
      name: `pageTitle`,
      value: pageTitle,
    });
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
  } else if (node.internal.type === `community_education__district` && isValidDistrict) {
    const districtName = node.title._t;

    createNodeField({
      node,
      name: `districtName`,
      value: districtName,
    });
    const pageTitle = districtName;
    createNodeField({
      node,
      name: `pageTitle`,
      value: pageTitle,
    });
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