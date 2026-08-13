function cutHalf(val) {
    const res = val/2;
    return res;
}

const ans = cutHalf(100);
console.log(ans);
console.log(cutHalf(350));


// conditional return
function isEven(val) {
    if(val%2 === 0) return true;
    else return false;
}

console.log(isEven(40));
console.log(isEven(47));