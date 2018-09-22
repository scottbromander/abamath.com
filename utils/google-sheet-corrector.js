const validUrl = require('valid-url');

const correctGoogleSheetRow = (originalRow) => {
  // Converts string of all columns from single row in google sheets
  // into an array of objects with column title and content
  let currentEdit = originalRow;
  const correctedObject = {};

  while (currentEdit.length > 0 && currentEdit.indexOf(': ') > -1) {
    const propertyEnd = currentEdit.lastIndexOf(': ');
    const newValue = currentEdit.substring(propertyEnd + 2, currentEdit.length);
    currentEdit = currentEdit.substring(0, propertyEnd);
    const valueEnd = currentEdit.lastIndexOf(', ');
    const newProperty = currentEdit.substring(valueEnd, currentEdit.length).replace(', ', '');
    currentEdit = currentEdit.substring(0, valueEnd);
    correctedObject[newProperty] = newValue;
  }
  return correctedObject;
};

const validateGoogleSheetRowObject = (districtClass, fieldsToCheck) => {
  // all required fields exist and are not 'N/A' in google sheet
  const areAllFieldsPresent = fieldsToCheck.reduce((validSoFar, field) => validSoFar && districtClass[field] && districtClass[field] !== '#N/A', true);
  if (!areAllFieldsPresent) return false;

  // check if class date is in the future
  if (fieldsToCheck.includes('startdate')) {
    const yesterday = new Date().setDate(new Date().getDate() - 1);
    const classIsInFuture = new Date(districtClass.startdate) >= yesterday;
    if (!classIsInFuture) return false;
  }

  if (fieldsToCheck.includes('link')) {
    // check for url registration link
    const validUrlLink = validUrl.isUri(districtClass.link);
    if (!validUrlLink) return false;
  }

  // if everything is valid, return true
  return true;
};

module.exports = {
  correctGoogleSheetRow,
  validateGoogleSheetRowObject,
};
