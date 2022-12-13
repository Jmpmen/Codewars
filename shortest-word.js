// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    s = s.split(' ')
    let shortest = s[0].length
    for (let i of s){
      if (i.length < shortest){
        shortest = i.length
      }
    }
    return shortest
  }