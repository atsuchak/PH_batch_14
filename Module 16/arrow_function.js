// Arrow funtion syntex
/**
 * const sum = ()=> {
 *     return statement
 * }
*/

const greet = (name) => {
    return `Hello ${name}, how are you? hu?`;
}
console.log(greet("Suchak"));

// If arrow funtion has a single statement
const anotherGreet = (name) => `Hello ${name}, how are you? hu?`;  // impleit return
console.log(anotherGreet("Sakin"));

const student = {
    name: "Suchak",
    age: 22, 
    showInfo: function() {
        return `Name: ${this.name} and Age: ${this.age}`;
    },
    showAge: ()=> {
        return `Age: ${this.age}`;
    }
}

console.log(student.showInfo());
console.log(student.showAge());