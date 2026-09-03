let name = "Suchak";

function greet(myName) {  // Pass by value
    myName = "Sakin";
    console.log(myName);
}
greet(name);
console.log(name);


// Pass by reference
let student = {
    name: "Ahnaf",
    age: 22,
    id: 12321
}

function aboutStudent(data) {
    data.name = "Tajwar";
    console.log(data);
}
aboutStudent(student);
console.log(student);  // Modify actual data also