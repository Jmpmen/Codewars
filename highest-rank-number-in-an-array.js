// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr){
    let freq = {}
    let max = 1
    arr.filter(x => freq[x] = freq[x] + 1 || 1)
    for(let i in freq){
      if (freq[i] > max) {
        max = freq[i]
      }
    }
    return Math.max(...Object.keys(freq).filter(x => freq[x] === max))
  }