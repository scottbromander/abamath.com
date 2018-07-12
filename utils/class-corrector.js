// Converts string of all columns from single row in google sheets
// into an array of objects with column title and content

module.exports = function correctClass(original) {
    //create a list of all of the properties
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
};