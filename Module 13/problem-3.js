// problem 3: Factorial of a number

function factorial(value) {
    if(value === 1 || value === 2) return value;

    return value * factorial(value-1);
}

let val = 6;
console.log(factorial(val));