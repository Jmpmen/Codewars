// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x) {
  return x.reduce((acc, c) => (typeof c === "number" ? acc + c : acc - +c), 0);
}
