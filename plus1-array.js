// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// Valid arrays

// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]

// Invalid arrays

// [1, -9] is invalid because -9 is not a non-negative integer

// [1, 2, 33] is invalid because 33 is not a single-digit integer

function upArray(arr) {
    if (!isInputIsNonEmptyArray(arr)) {
        return null;
    }

    const isNumber = num =>  typeof num === 'number';
    const isIntSingleDigit = num => Number.isInteger(num) && num >= 0 && num <10;

    let resultArr = [];
    let i = arr.length;
    let num;
    while (i-- > 0) {
        num = arr[i];
        if (!isNumber(num) || !isIntSingleDigit(num)) {
            return null;
        }
        
        if (num === 9) {
            resultArr[i] = 0;
            if (i === 0) { //means we're in the msb/left most digit, so we need to insert 1 to the left
                resultArr.unshift(1);
                break; //you can leave it out really, as the next check in the while will fail anyway
            }  
        }
        else {
            resultArr[i] = num + 1; //No more + 1 should be made, just check for validity 
            //of the rest of the input and copy to the result arr
            while (--i > -1) {
                num = arr[i];
                if (!isNumber(num) || !isIntSingleDigit(num)) {
                    return null;
                }
                resultArr[i] = arr[i];
            }
            break;
        }
    }

    return resultArr;

    function isInputIsNonEmptyArray(arr) {
        return Array.isArray(arr) && arr.length > 0;
    }
}