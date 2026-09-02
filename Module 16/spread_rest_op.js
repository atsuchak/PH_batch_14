let numbers = [34, 23, 12, 64, 23, 75, 38];
console.log(...numbers);

let max = Math.max(...numbers);
console.log(max);

let anotherNumbers = [...numbers];

numbers.push(40);
console.log(anotherNumbers);


// Rest Operator
function add(a, b, c, ...restOp) {
    console.log(restOp, "Rest Operator");

    let sum = 0;
    for(let number of restOp) sum += number;
    return a + b + c + sum;
}

console.log(add(30, 12, 32, 12, 42, 53, 12, 64));