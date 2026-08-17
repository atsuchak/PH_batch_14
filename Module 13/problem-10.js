// Problem 9: Find smallest number from an array

function smallestNum(val) {
    let sml = val[0];

    for(let i = 0; i < val.length; i++) 
        if(val[i] < sml) sml = val[i];

    return sml;
}

let arr = [3, 2, 5, 6, 3, 2];
console.log(smallestNum(arr));