function studentIntroduction(student) {
  // Write your code here

  if(typeof student !== "object") return `Invalid`;
  else return student.name === undefined || student.age === undefined || student.course === undefined? `Invalid` : `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}


// let alu = {name:"Rafi",age:18,course: "C++",loc: "Dhaka"};
// let alu = {name:"Rafi",age:18};
// let alu = {};
let alu = 98;
// let alu = "Hello";
console.log(studentIntroduction(alu));;
