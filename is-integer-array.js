// Write a function with the signature shown below:

// function isIntArray(arr) {
//   return true
// }
// returns true  / True if every element in an array is an integer or a float with no decimals.
// returns true  / True if array is empty.
// returns false / False for every other input.

function isIntArray(arr) {
    return !!arr && arr.filter(x => x % 1 == 0 && typeof x == 'number').length === arr.length;
  }