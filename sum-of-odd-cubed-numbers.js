// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
  let sum = 0;
  for (let i of arr) {
    if (!Number.isInteger(i)) {
      return undefined;
    }
    if (Math.abs(i) % 2 === 1) {
      sum += Math.pow(i, 3);
    }
  }
  return sum;
}
