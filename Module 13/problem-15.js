// Problem 15: Return all even numbers, then their sum


// my approach
function evenSum(num) {
    let sum = 0;
    let arr = [];
    for(let key of num) {
        if(key % 2 === 0) {
            sum += key;
            arr.push(key);
        }
    }

    return [sum, arr];
}

// PH approach
function getEven(num) {
    let arr = [];
    for(let key of num) 
        if(key % 2 === 0) arr.push(key);

    return arr;
}

function getEvSum(num) {
    let sum = 0;
    for(let key of num) 
        if(key % 2 === 0)  sum += key;

    return sum;
}

let arr = [5, 32, 5, 2, 640, 3, 23];
console.log(evenSum(arr));

let evenNumbers = getEven(arr);
let sum = getEvSum(evenNumbers);
console.log(evenNumbers);
console.log(sum);