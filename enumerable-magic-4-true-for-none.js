// Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

function none(arr, fun) {
  for (const item of arr) {
    if (fun(item)) {
      return false; // If the block returns true for any item, return false
    }
  }
  return true;
}
