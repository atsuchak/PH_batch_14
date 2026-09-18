/* 
    Merge & duplicate Arrays
    Merge two arrays and remove duplicates using spread + Set.

    Example: [1, 2, 3] + [2, 3, 4] -> [1, 2, 3, 4]
*/

let arr1 = [10, 20, 30, 40, 50];
let arr2 = [50, 60, 20, 90];

let mergeArr = [...arr1, ...arr2];
let newArr = [...new Set(mergeArr)];  // rest op for get only the array and set method for remove duplicate
console.log(newArr);