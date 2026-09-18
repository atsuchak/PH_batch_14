/* 
    Swap & Reset Extractor
    Swap two variables and extract first/reset elements from an array using destructuring, no temp variable.

    Example: [a, b] = [b, a]
    Example: [first, ...rest] = [10, 20, 30, 40] -> first = 10, rest = [20, 30, 40]
*/

let a = 5;
let b = 10;

[b, a] = [a, b];
console.log(a, b);

let nums = [10, 20, 30, 40, 50, 60];
let [first, ...rest] = nums;
console.log(first, rest);