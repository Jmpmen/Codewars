// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    let str = ''
    num = num.toString()
    for (let i = 0; i < num.length; i++){
      if (num[i] * Math.pow(10,num.length-i-1) > 0){
          str += `${num[i] * Math.pow(10,num.length-i-1)} + `
      }
    }
    return str.slice(0,-3)
  }