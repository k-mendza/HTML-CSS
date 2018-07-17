var array = [1,2,3,4,5,6,7,8,9];

console.log(array[0]);

// use .push to add to the end of array
array.push(10);
// use .pop to remove last element of the array
array.pop();
// use .shift to remove first element of the array
array.shift();
// use .unshift to add as first element of the array
array.unshift();
// indexOf returns index of defined value
array.indexOf(3);
// use slice to copy part of array into new array
var shorterArray = array.slice(2,3);