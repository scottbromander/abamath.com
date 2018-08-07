var validUrl = require('valid-url');

const correctDistrict = original => {
    // Converts string of all columns from single row in google sheets
    // into an array of objects with column title and content
    var currentEdit = original;
    var correctedDistrict = {};

    while (currentEdit.length > 0 && currentEdit.indexOf(": ") > -1) {
        var propertyEnd = currentEdit.lastIndexOf(": ");
        var newValue = currentEdit.substring(propertyEnd + 2, currentEdit.length);
        currentEdit = currentEdit.substring(0, propertyEnd);
        var valueEnd = currentEdit.lastIndexOf(", ");
        var newProperty = currentEdit.substring(valueEnd, currentEdit.length).replace(", ", "");
        currentEdit = currentEdit.substring(0, valueEnd);
        correctedDistrict[newProperty] = newValue;
    }
    return correctedDistrict;
}

const validateDistrict = district => {
    // all required fields exist and are not 'N/A' in google sheet
    const fieldsToCheck = [
        'website',
    ];
    const areAllFieldsPresent = fieldsToCheck.reduce((validSoFar, field) => {
        return validSoFar && district[field] && district[field] !== '#N/A';
    }, true);
    if (!areAllFieldsPresent) return false;
}

module.exports = {
    correctDistrict,
    validateDistrict,
}