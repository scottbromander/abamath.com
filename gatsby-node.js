const { pagePromiseGenerator } = require('./utils/page-promise-generator');
const { googleSheetNodeFilter } = require('./utils/google-sheet-node-filter');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField, deleteNode } = boundActionCreators
  const googleSheetNodeFieldCreator = googleSheetNodeFilter(node, createNodeField, deleteNode);
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
  const slugRoutePageCreator = pagePromiseGenerator(graphql, createPage);
  return Promise.all([
    slugRoutePageCreator('allMarkdownRemark', './src/templates/markdown-display.js'),
    slugRoutePageCreator('allCommunityEducationDistrictClasses', './src/templates/District_Classes/district-class.js'),
    slugRoutePageCreator('allCommunityEducationOfferedClasses', './src/templates/Offered_Classes/offered-class.js'),
    slugRoutePageCreator('allCommunityEducationDistrict', './src/templates/Districts/district.js'),
  ]);
};
