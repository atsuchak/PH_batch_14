const num = [13, 53, 23, 15, 56];
const num2 = [3, 4, 20, 13];

if(num.includes(53)) console.log("Here 53 exists");
else console.log("Not exists");

// concat operation
const allNum = num.concat(num2);
console.log(allNum);

// join operation
const joined = num.join(" -> ");
console.log(joined);

// index of operation
const pos = num.indexOf(15);
console.log(pos);

console.log(typeof num2);

console.log(Array.isArray(num2));