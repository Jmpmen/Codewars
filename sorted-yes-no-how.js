// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
  const array1 = array.join('')
  if (array.sort((a,b) => a-b).join('') === array1) return 'yes, ascending'
  if (array.sort((a,b) => b-a).join('') === array1) return 'yes, descending'
  return 'no'
}