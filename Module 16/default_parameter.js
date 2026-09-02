function greet (name = "Human") {
    return "Hello " + name + " a murgi";
}

console.log(greet("suchak"));
console.log(greet());

function about(name = "Human", ocupation = "Student") {
    return "My name is " + name + " and my ocupation is " + ocupation; 
}

console.log(about("Sakin", "Bekar"));
console.log(about("Suchak"));
console.log(about(undefined ,"Developer"));
console.log(about());