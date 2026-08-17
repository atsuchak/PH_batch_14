// Problem 2: Sum of a range of Numbers (1 to N)

function sumAll (arr) {
    let sum = 0;
    for(let num in arr) 
        sum += arr[num];
    
    return sum;
}

let array1 = [5, 3, 1, 6, 3, 2];
let array2 = [23, 1, 12, 62, 36, 23];
let array3 = [51, 34, 76, 12, 32, 65];
console.log(sumAll(array1));
console.log(sumAll(array2));
console.log(sumAll(array3));