// normal format
let name = "Suchak";
console.log(name);

// template string
let location = `Dhaka, Bangladesh`;
console.log(location);

let about = `Hello ${name}, your current location is ${location}`;
console.log(about);

let amount = 5000;

function admissionConfirmationMail(name, amount) {
    return `Hello ${name || "User"},
            Your admission is confirm
            Pay amount: ${amount}`;
}

console.log(admissionConfirmationMail("Ahnaf", 3000));