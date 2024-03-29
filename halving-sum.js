// Task

// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Example

// 25  =>  25 + 12 + 6 + 3 + 1 = 47

function halvingSum(n) {
  let sum = n;
  for (let i = 2; i <= n / 2; i = i * 2) {
    sum += Math.floor(n / i);
  }
  return sum === 1 ? sum : sum + 1;
}
