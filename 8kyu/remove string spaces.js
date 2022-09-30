// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
    let str = ""
    for (i = 0; i < x.length ; i++){
      if (x[i] == " "){
        str = str
      }else {
        str += x[i]
      }
    }
    return str
  }