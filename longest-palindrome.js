// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

// Example:
// "a" -> 1 
// "aab" -> 2  
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

longestPalindrome=function(s){
  let longest = 0;

  for(let i=0; i < s.length; i++){
    for(let j = i+1; j <= s.length; j++) {
      const str = s.slice(i,j);
      if(isPalindrome(str) && longest < str.length) {
        longest = str.length;
      }
    }
  }
  return longest;
}

function isPalindrome(str){
  str = str.split('')
  for(let i = 0; i < str.length / 2; i++){
    if(str[i] !== str[str.length - 1 - i]){
      return false
    }
  }
  return true
}