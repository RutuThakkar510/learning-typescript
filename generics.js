// Example 1
function convertToArray(input) {
    return [input];
}
convertToArray(10);
// Example 2
// function getIndexOfArrayItem<T>(array: T[], arrayItem: T) {
//   console.log(array.indexOf(arrayItem));
//   return array.indexOf(arrayItem);
// }
// => arrow functions
// const getIndexOfArrayItem = <T>(array: T[], arrayItem: T) => {
//   return array.indexOf(arrayItem);
// };
var getIndexOfArrayItem = function (array, arrayItem) {
    return array.indexOf(arrayItem);
};
// getIndexOfArrayItem([1, 2, 3], "2"); // gives error
console.log(getIndexOfArrayItem([1, 2, 3], 2));
