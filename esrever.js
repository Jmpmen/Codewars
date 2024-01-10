// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

reverse = function (array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(array[array.length - 1 - i]);
  }
  return arr;
};
