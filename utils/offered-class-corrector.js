var validUrl = require('valid-url');

const correctOfferedClass = original => {
    // Converts string of all columns from single row in google sheets
    // into an array of objects with column title and content
    var currentEdit = original;
    var correctedClass = {};

    while (currentEdit.length > 0 && currentEdit.indexOf(": ") > -1) {
        var propertyEnd = currentEdit.lastIndexOf(": ");
        var newValue = currentEdit.substring(propertyEnd + 2, currentEdit.length);
        currentEdit = currentEdit.substring(0, propertyEnd);
        var valueEnd = currentEdit.lastIndexOf(", ");
        var newProperty = currentEdit.substring(valueEnd, currentEdit.length).replace(", ", "");
        currentEdit = currentEdit.substring(0, valueEnd);
        correctedClass[newProperty] = newValue;
    }
    return correctedClass;
}

const validateOfferedClass = districtClass => {
    // all required fields exist and are not 'N/A' in google sheet
    const fieldsToCheck = [
        'classgrades',
        'classdescription'
    ];
    const areAllFieldsPresent = fieldsToCheck.reduce((validSoFar, field) => {
        return validSoFar && districtClass[field] && districtClass[field] !== '#N/A';
    }, true);
    if (!areAllFieldsPresent) return false;

    // if everything is valid, return true
    return true;

}

module.exports = {
    correctOfferedClass,
    validateOfferedClass,
}