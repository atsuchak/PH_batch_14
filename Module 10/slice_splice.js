const nums = [12, 42, 52, 64, 23, 16, 64];

// slice
// console.log("Slice: ");
const slc = nums.slice(2, 5);
// console.log(slc);
// console.log(nums);

// splice
// console.log("Splice: ");
const parts = nums.splice(1, 3);  // if 2 parameter means remove from 2nd index to before 4th index
const anoParts = nums.splice(2, 3, 10, 20, 30);  // remove 2nd parameter element after 1st parameter index and insert another parameters value
// console.log(parts);
console.log(nums);

console.log(anoParts);
console.log(nums);


nums.sort();
console.log(nums);    
