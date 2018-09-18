const { pagePromiseGenerator } = require('./utils/page-promise-generator');
const { googleSheetNodeFilter } = require('./utils/google-sheet-node-filter');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField, deleteNode } = actions
  const googleSheetNodeFieldCreator = googleSheetNodeFilter(node, createNodeField, deleteNode);
  const isDistrictClass = node.internal.type === 'community_education__district_classes';
  const isProposedClass = node.internal.type === 'community_education__proposed_classes';
  const isOfferedClass = node.internal.type === 'community_education__offered_classes';
  const isDistrict = node.internal.type === 'community_education__district';

  if (isDistrictClass) {
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
  } else if (isProposedClass) {
    googleSheetNodeFieldCreator('className', [
      'days',
      'description',
      'district',
      'enddate',
      'grades',
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

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const slugRoutePageCreator = pagePromiseGenerator(graphql, createPage);
  return Promise.all([
    slugRoutePageCreator('allCommunityEducationDistrictClasses', './src/templates/District_Classes/district-class.js'),
    slugRoutePageCreator('allCommunityEducationOfferedClasses', './src/templates/Offered_Classes/offered-class.js'),
    slugRoutePageCreator('allCommunityEducationDistrict', './src/templates/Districts/district.js'),
  ]);
};
