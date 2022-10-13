// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }

// function isIsogram(str){
//     str = str.toLowerCase()
//     duplicate = 0
//     for (i=0;i<str.length;i++){
//       if (str.lastIndexOf(str[i]) !== str.indexOf(str[i])){
//         duplicate += 1
//       }
//     }
//     return duplicate === 0
// }