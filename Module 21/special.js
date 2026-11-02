"use strict";
function addTwoNumbers(a, b) {
    if (typeof a === 'string') {
        a = parseFloat(a);
    }
    return a + b;
}
console.log(addTwoNumbers('', 12));
// null
const myFuture = null;
// undefined
let myUndefinedVariable = undefined;
// any
const myVariable = 'Hello World';
// unknown
let myUnknownVariable = 10;
myUnknownVariable = 'Hello World';
myUnknownVariable = true;
// never
function throwError(message) {
    throw new Error(message);
}
