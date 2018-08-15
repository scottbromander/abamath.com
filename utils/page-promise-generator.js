const path = require('path');

const pagePromiseGenerator = (graphql, createPage) => (gqlNodeName, pageComponent) => new Promise((resolve, reject) => {
    graphql(`
    {
      ${gqlNodeName} {
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
        result.data && result.data[gqlNodeName] && result.data[gqlNodeName].edges.forEach(({ node }) => {
          if (node.fields && node.fields.slug) {
            createPage({
              path: node.fields.slug,
              component: path.resolve(pageComponent),
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

module.exports = {
  pagePromiseGenerator,
};