// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
    let str = []
    for (let i of s){
      if (i === '#'){
        str.pop()
      }else{
        str.push(i)
      } 
    }
    return str.join('')
  }