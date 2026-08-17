// Problem 9: Find largest number from an array

function largestNum(val) {
    let lrg = val[0];

    for(let i = 0; i < val.length; i++) 
        if(val[i] > lrg) lrg = val[i];

    return lrg;
}

let arr = [3, 2, 5, 6, 3, 2];
console.log(largestNum(arr));