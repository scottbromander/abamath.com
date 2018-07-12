const path = require(`path`);
const { correctClass, validateClass } = require('./utils/district-class-corrector');
const slugify = require('slugify');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField, deleteNode } = boundActionCreators
  const isMarkdownRemark = node.internal.type === `MarkdownRemark`;
  const isDistrictClass = node.internal.type === `community_education__classes` && node.title && node.content && node.title._t && node.content._t;
  const correctedClass = isDistrictClass ? correctClass(node.content._t) : null;
  const isValidDistrictClass = correctedClass ? validateClass(correctedClass) : null;
  if (isMarkdownRemark) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  } else if(isDistrictClass && isValidDistrictClass) {
    const className = node.title._t;

    createNodeField({
      node,
      name: `className`,
      value: className,
    });
    const pageTitle = correctedClass.district + " " + className;
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
    Object.entries(correctedClass).forEach((entry)=> {
      createNodeField({
        node,
        name: entry[0],
        value: entry[1],
      });
    });
  } else if(isDistrictClass && !isValidDistrictClass) {
    deleteNode(node.id, node);
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allCommunityEducationClasses {
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
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if(node.fields && node.fields.slug) {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              slug: node.fields.slug,
            },
          });
        }
      })
      result.data.allCommunityEducationClasses.edges.forEach(({ node }) => {
        if(node.fields && node.fields.slug) {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/district-class.js`),
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              slug: node.fields.slug,
            },
          });
        }
      })
      resolve();
    })
  })
};