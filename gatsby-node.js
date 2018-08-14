const path = require(`path`);
const { correctDistrictClass, validateDistrictClass } = require('./utils/district-class-corrector');
const { correctOfferedClass, validateOfferedClass } = require('./utils/offered-class-corrector');
const { correctDistrict, validateDistrict } = require('./utils/district-corrector');
const slugify = require('slugify');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField, deleteNode } = boundActionCreators
  const isMarkdownRemark = node.internal.type === `MarkdownRemark`;

  // Checking for specific google sheets
  const hasGoogleSheetFields = node.title && node.content && node.title._t && node.content._t;

  // checking for valid district classes
  const isDistrictClass = node.internal.type === `community_education__district_classes`;
  const correctedDistrictClass = isDistrictClass && hasGoogleSheetFields ? correctDistrictClass(node.content._t) : null;
  const isValidDistrictClass = correctedDistrictClass ? validateDistrictClass(correctedDistrictClass) : null;

  // checking for valid offered classes
  const isOfferedClass = node.internal.type === `community_education__offered_classes`;
  const correctedOfferedClass = isOfferedClass && hasGoogleSheetFields ? correctOfferedClass(node.content._t) : null;
  const isValidOfferedClass = correctedOfferedClass ? validateOfferedClass(correctedOfferedClass) : null;

  // checking for valid district
  const isDistrict = node.internal.type === `community_education__district`;
  const correctedDistrict = isDistrict && hasGoogleSheetFields ? correctDistrict(node.content._t) : null;
  const isValidDistrict = correctedDistrict ? validateDistrict(correctedDistrict) : null;

  if (isMarkdownRemark) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  } else if (isDistrictClass && isValidDistrictClass) {
    const className = node.title._t;

    createNodeField({
      node,
      name: `className`,
      value: className,
    });
    const pageTitle = correctedDistrictClass.district + " " + className;
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
    Object.entries(correctedDistrictClass).forEach((entry) => {
      createNodeField({
        node,
        name: entry[0],
        value: entry[1],
      });
    });
  } else if (isOfferedClass && isValidOfferedClass) {
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
    Object.entries(correctedOfferedClass).forEach((entry) => {
      createNodeField({
        node,
        name: entry[0],
        value: entry[1],
      });
    });
  } else if (isDistrict && isValidDistrict) {
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
    Object.entries(correctedDistrict).forEach((entry) => {
      createNodeField({
        node,
        name: entry[0],
        value: entry[1],
      });
    });
  } else if (isDistrictClass || isOfferedClass || isDistrict) {
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