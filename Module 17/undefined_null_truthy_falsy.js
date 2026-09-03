let x;
console.log(x);  // undefined (no value declarez)

let y = null;
console.log(y);  // initially empty

function greet(name) {
    console.log(name);
}
greet();  // undefined (no argument pass)

const obj = {age: 25};
console.log(obj.city);  // undefined (no property)


/** Falsy value
 *      1. false
 *      2. 0
 *      3. " "
 *      4. null
 *      5. undefined
 *      6. NaN
*/