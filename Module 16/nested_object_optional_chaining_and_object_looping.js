const user = {
    name: "Alu",
    age: 25,
    something: [34, 23, 15, 53], 
    company: {
        name: "Murgi gang",
        location: "Ampara jora jora",
        establish: 1998
    }
}

// Access property: Dot notation & Bracket notation
console.log(user);

// Dot notation
console.log(user.age, user.company.location);

// Bracket notation
const key = 'company';
console.log(user[key]);

// Optional chaining
const user2 = {
    name: "Potol",
    age: 35,
    something: [34, 23, 15, 53], 
}
console.log(user2?.name, user2?.company?.location);  // use '?' to check is a property exist or not
