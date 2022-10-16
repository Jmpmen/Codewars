// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

function sumArray(array) {
    if (array && array.length > 2){
      return array.sort((a,b)=>a-b)
        .slice(1,-1)
        .reduce((acc,c)=>acc+c,0)
    }else{
        return 0
    }
  }

function sumArray(array) {
    if (array && array.length > 2){
      array.sort((a,b)=>a-b)
      return array.reduce((acc,c)=>acc+c,0) - array[0] - array[array.length-1]
    }else{
      return 0
    }
  }