// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
    num = num.toString().split('')
      .map(x => x % 2 ? `-${x}-` : x < 0 ? Math.abs(x) : x).join('')
      .trim()
      .replace(/--/g,'-')
    if (num.startsWith('-') && num.endsWith('-')){
      return num.slice(1,-1)
    }else if (num.startsWith('-')){
      return num.slice(1)
    }else if (num.endsWith('-')){
      return num.slice(0,-1)
    }else{
      return num
    }
  }