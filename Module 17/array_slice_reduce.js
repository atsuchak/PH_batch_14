// Slice method
let fruits = ["Apple", "Banana", "Jackfruit", "Orange", "Watermelon"];
const sliced = fruits.slice(1, 4);
console.log(sliced);

// Reduce method
let nums = [10, 20, 30, 40, 50, 60, 70];
let sum = nums.reduce((accumulator, elem, idx, arr) => {
    console.log(accumulator, elem);
    return accumulator + elem;
}, 0);

console.log(sum);