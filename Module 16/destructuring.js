// Destructuring for array
const numbers = [10, 20, 30, 40, 50];

const [ten, twenty, , , fifty] = numbers;  // 2 comma extra means skip 2 index's values
console.log(ten, twenty, fifty);  // positon matters


// Destructuring for object
const student = {
    name: `Suchak`,
    age: 22, 
    ocupation: "Human"
}
const {age, name} = student;  // Postion not matters
console.log(name, age);

const {ocupation, name:fullName} = student;  // Overwrite name to fullName
console.log(fullName, age);