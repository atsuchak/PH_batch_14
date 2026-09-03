let arr = [2, 4, 6, 8, 10];
console.log(arr);

// Map method: To modify array and get new array
let doubleUsingMap = arr.map((element) => element*2);
console.log(doubleUsingMap);

// Foreach method: Simply iterate loop
arr.forEach((element, idx, arr) => {
    console.log(element, idx, arr)
})

// Filter method: Filter out element and create new array based on condition
let expensive = arr.filter((element) => element >= 6);
console.log(expensive);

// Find method: Find out first element based on condition
let expensiveProduct = arr.find((element) => element >= 4);
console.log(expensiveProduct);