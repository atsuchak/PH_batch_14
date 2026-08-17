// Problem 13: Loop through an object's properties

let monitor = {
    color: 'Silver',
    brand: 'ViewSonic',
    size: '22 inch',
    resulation: '1080p', 
    display: 'Ips'
}

// for in loop method
for(let key in monitor) {
    // console.log(monitor.brand);  // dot notation
    console.log(key, ':', monitor[key]);  // bracket notation
}

// using key method
let objKeys = Object.keys(monitor);
console.log(objKeys);

for(let i = 0; i < objKeys.length; i++) {
    console.log(objKeys[i], ':', monitor[objKeys[i]]);
}

// using for of loop
for(let key of objKeys) {
    console.log(key, ':', monitor[key]);
}