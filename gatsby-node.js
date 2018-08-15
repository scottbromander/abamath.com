const path = require(`path`);
const { correctGoogleSheetRow, validateGoogleSheetRowObject } = require('./utils/google-sheet-corrector');
const slugify = require('slugify');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField, deleteNode } = boundActionCreators
  const isMarkdownRemark = node.internal.type === `MarkdownRemark`;

  if (isMarkdownRemark) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }

  googleSheetRowFilter(createNodeField, deleteNode)(node, `community_education__district_classes`, `className`, [
    'days',
    'description',
    'district',
    'enddate',
    'grades',
    'link',
    'startdate',
    'time'
  ]);

  googleSheetRowFilter(createNodeField, deleteNode)(node, `community_education__offered_classes`, `className`, [
    'classgrades',
    'classdescription'
  ]);

  googleSheetRowFilter(createNodeField, deleteNode)(node, `community_education__district`, `districtName`, [
    'website'
  ]);
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

const googleSheetRowFilter = (createNodeField, deleteNode) => (node, nodeTypeToCheck, titleName, requiredFields) => {
  if (node.internal.type === nodeTypeToCheck) {
    const correctedGoogleSheetRow = node.content && correctGoogleSheetRow(node.content._t);
    const isValidGoogleSheetRow = correctedGoogleSheetRow && validateGoogleSheetRowObject(correctedGoogleSheetRow, requiredFields);
    if (isValidGoogleSheetRow) {
      const rowTitle = node.title._t;
      const pageTitle = correctedGoogleSheetRow.district ? correctedGoogleSheetRow.district + " " + rowTitle : rowTitle;

      createNodeField({
        node,
        name: titleName,
        value: rowTitle,
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
    } else {
      deleteNode(node.id, node);
    }
  }
}