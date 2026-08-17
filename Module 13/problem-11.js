// Problem 11: Sum and Average of an Array

function sumAndAvg(val) {
    let sum = 0;

    for(let i = 0; i < val.length; i++)
        sum += val[i];

    return [sum, sum/val.length];
}

let arr = [5, 3, 1, 5, 7];
console.log(sumAndAvg(arr));