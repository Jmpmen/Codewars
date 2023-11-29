// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3].
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!

function solve(s) {
  const upper = s
    .split("")
    .filter((x) => "ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(x));
  const lower = s
    .split("")
    .filter((x) => "abcdefghijklmnopqrstuvwxyz".includes(x));
  const num = s.split("").filter((x) => "1234567890".includes(x));
  const special = s
    .split("")
    .filter((x) => ![...upper, ...lower, ...num].includes(x));
  return [upper.length, lower.length, num.length, special.length];
}
