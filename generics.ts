// Example 1
function convertToArray<T>(input: T): T[] {
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

const getIndexOfArrayItem = <T>(array: T[], arrayItem: T) =>
  array.indexOf(arrayItem);

// getIndexOfArrayItem([1, 2, 3], "2"); // gives error
console.log(getIndexOfArrayItem([1, 2, 3], 2));

// Example 3 ======== different types of parameters
function createArray<T, K>(input1: T, input2: K): [T, K] {
  return [input1, input2];
}

createArray("hello world", 1);