const slugify = require('slugify');
const { correctGoogleSheetRow, validateGoogleSheetRowObject } = require('./google-sheet-corrector');

const googleSheetNodeFilter = (node, createNodeField, deleteNode) => (titleName, requiredFields) => {
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
      deleteNode({ node });
    }
  };

module.exports = {
    googleSheetNodeFilter,
};