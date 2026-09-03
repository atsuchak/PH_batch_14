/**
 * Two Type of datatype:
 *                      1. Primitive: string, number, boolean, undefined, null
 *                      2. Non primitive: function, object, array
*/

// Primitive
let number = 15;
let name = "Suchak";
let name2 = name;
let age = undefined;
let address = null;
console.log(typeof number, typeof name, typeof age, typeof address);

name = "Sakin";
console.log(name2);  // still name2 show Suchak as it only copy the value not the address

// Non primitive
let student = {
    name: "Another Suchak",
    age: 22,
    address: "Dhaka"
}
let student2 = student;
let numbers = [12, 24, 2, 14, 12, 53];
let numbers2 = numbers;  // if want to copy numbers array address
let anotherNumber = [...numbers];  // if dont want to copy address, only need value
const add_num = (val1 = 0, val2 = 0) => val1 + val2;

console.log(typeof student, typeof numbers, typeof add_num);

student.name = "Full name";
console.log(student2);  // change the student2 name also as it copy the address instead of the value