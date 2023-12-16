// Your task is to write function factorial.

function factorial(n) {
  if (n === 0) return 1;
  const nums = Array.from({ length: n }, (v, i) => i + 1);
  return nums.reduce((acc, c) => acc * c, 1);
}
