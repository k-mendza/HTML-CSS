var myObject = {
    fieldOne: "value1",
    fieldTwo: "0",
    fieldThree: "value3"
};

console.log(myObject.fieldOne);
console.log(myObject.fieldTwo);
console.log(myObject.fieldThree);

var myObjectWithMethods = {

};
// to add function to object:
myObjectWithMethods.method = function() {
    return "This is method";
};

myObjectWithMethods.anotherMethod = function() {
    return "This is anotherMethod";
};