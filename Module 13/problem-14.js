// Problem 14: You are given an object containing information about a student.

/**
 * ----- Tasks -----
 * Print all keys
 * Print all values
 * Print each key-value pair
 * name: Suchak
 * age: 22
 * University: UIU
 * Department: CSE
 * 
 * Count the total number of properties in the object
 * Check if the object contains a property named 'email'
 * 
 * ----- Expected input:
 * const student = {
 *  name: "Suchak", 
 *  age: 22, 
 *  Univesity: "UIU",
 *  Department: "CSE"
 * };
 * 
 * ----------------------------
 * 
 * ----- Expected output:
 * name age university department
 * 
 * Suchak 22 UIU CSE
 * 
 * name: Suchak
 * age: 22
 * University: UIU
 * Department: CSE 
 * 
 * Total Properties: 4
 * Has Email: false
*/


function objOperation(obj) {
    for(let key in obj) 
        console.log(key, " ");

    for(key in obj) 
        console.log(obj[key]);

    for(key in obj) 
        console.log(key, ':', obj[key]);
    
    let objKeyCount = Object.keys(obj);
    console.log('Total Properties:', objKeyCount.length);

    let hasEmailProperty = obj.hasOwnProperty("email");
    console.log('Has Email:', hasEmailProperty);

}

const student = {
    name: "Suchak", 
    age: 22, 
    Univesity: "UIU",
    Department: "CSE"
};

objOperation(student)