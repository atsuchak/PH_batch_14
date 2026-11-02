"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(4, 2));
// no return fuction
function calculate(a, b) {
    console.log(a + b);
}
calculate(4, 42);
// multi type parameter
function person(name, age, marks, isStudent, dead) {
    console.log(name, age, marks, isStudent);
}
person('Suchak', 43, [90, 80, 70], true);
// Arrow function
const getLargerVal = (person1, person2) => {
    return person1 > person2 ? 'Person1 is larger' : 'person2 is larger';
};
console.log(getLarger(4, 2));
