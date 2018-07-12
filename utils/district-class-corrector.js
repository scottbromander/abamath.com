var validUrl = require('valid-url');

const correctClass = original => {
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

const validateClass = districtClass => {
    // all required fields exist and are not 'N/A' in google sheet
    const fieldsToCheck = [
        'days',
        'description',
        'district',
        'enddate',
        'grades',
        'link',
        'startdate',
        'time'
    ];
    const areAllFieldsPresent = fieldsToCheck.reduce((validSoFar, field) => {
        return validSoFar && districtClass[field] && districtClass[field] !== '#N/A';
    }, true);
    if (!areAllFieldsPresent) return false;

    // check if class date is in the future
    const classIsInFuture = new Date(districtClass.startdate) >= new Date();
    if (!classIsInFuture) return false;

    // check for url registration link
    const validUrlLink = validUrl.isUri(districtClass.link);
    if (!validUrlLink) return false;

    // if everything is valid, return true
    return true;

}

module.exports = {
    correctClass,
    validateClass,
}