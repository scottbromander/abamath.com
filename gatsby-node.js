const path = require(`path`);
const { correctGoogleSheetRow, validateGoogleSheetRowObject } = require('./utils/google-sheet-corrector');
const slugify = require('slugify');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField, deleteNode } = boundActionCreators
  const googleSheetNodeFieldCreator = googleSheetRowFilter(node, createNodeField, deleteNode);
  const isMarkdownRemark = node.internal.type === 'MarkdownRemark';
  const isDistrictClass = node.internal.type === 'community_education__district_classes';
  const isOfferedClass = node.internal.type === 'community_education__offered_classes';
  const isDistrict = node.internal.type === 'community_education__district';

  if (isMarkdownRemark) {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  } else if (isDistrictClass) {
    googleSheetNodeFieldCreator('className', [
      'days',
      'description',
      'district',
      'enddate',
      'grades',
      'link',
      'startdate',
      'time'
    ]);
  } else if (isOfferedClass) {
    googleSheetNodeFieldCreator('className', [
      'classgrades',
      'classdescription'
    ]);
  } else if (isDistrict) {
    googleSheetNodeFieldCreator('districtName', [
      'website'
    ]);
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const slugRoutePageCreator = slugRoutePagePromiseGenerator(graphql, createPage);
  return Promise.all([
    slugRoutePageCreator('allMarkdownRemark', './src/templates/markdown-display.js'),
    slugRoutePageCreator('allCommunityEducationDistrictClasses', './src/templates/district-class.js'),
    slugRoutePageCreator('allCommunityEducationOfferedClasses', './src/templates/offered-class.js'),
    slugRoutePageCreator('allCommunityEducationDistrict', './src/templates/district.js'),
  ]);
};

const googleSheetRowFilter = (node, createNodeField, deleteNode) => (titleName, requiredFields) => {
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
      name: 'slug',
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

const slugRoutePagePromiseGenerator = (graphql, createPage) => (gqlNodeName, pageComponent) => new Promise((resolve, reject) => {
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