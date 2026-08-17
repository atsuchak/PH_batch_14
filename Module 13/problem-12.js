// Problem 12: Filter numbers greater than a value

function compNum(array, comp) {
    let arr = [];

    for(let it in array) 
        if(array[it] > comp) arr.push(array[it]);

    return arr;
}

let val = [5, 3, 1, 6, 7, 56, 23, 12, 53, 2, 6, 34];
let comp = 7;
console.log(compNum(val, comp));