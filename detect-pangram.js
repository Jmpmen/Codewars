// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    string = string.toLowerCase().split(" ").join("").split("").filter(x => "abcdefghijklmnopqrstuvwxyz".includes(x))
    string = [... new Set(string)].sort().join("")
    return string === "abcdefghijklmnopqrstuvwxyz"
  }

// function isPangram(string){
//   string = string.toLowerCase()
//   return 'abcdefghijklmnopqrstuvwxyz'.split("").every((x) => string.includes(x));
// }