const nums = [12, 42, 52, 64, 23, 16, 64];

for(const num of nums) {
    console.log("Current item is:", num);
}

for(let i = 0; i < nums.length; i++) {
    console.log("Value of i is:", i);
    console.log("Value of", i+ "th num is:", nums[i]);
}