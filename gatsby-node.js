const path = require(`path`);
const classCorrector = require('./utils/class-corrector');
const slugify = require('slugify');
const { createFilePath } = require(`gatsby-source-filesystem`);
var counter = 0;

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  } else if(node.internal.type === `community_education__classes` && node.title && node.content && node.title._t && node.content._t) {
    const correctedClassObject = classCorrector(node.content._t);
    const className = node.title._t
    createNodeField({
      node,
      name: `className`,
      value: className,
    });
    const pageTitle = correctedClassObject.district + " " + className;
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
    Object.entries(correctedClassObject).forEach((entry)=> {
      createNodeField({
        node,
        name: entry[0],
        value: entry[1],
      });
    });
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
      const allPages = [...result.data.allMarkdownRemark.edges, ...result.data.allCommunityEducationClasses.edges]
      allPages.forEach(({ node }) => {
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
      resolve();
    })
  })
};