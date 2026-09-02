// Object methods: keys, values, entires, delete, seal, freeze

const user = {
    name: "John Doe",
    age: 22,
    id: 44023
}

const keys = Object.keys(user);
const values = Object.values(user);
const entries = Object.entries(user);

console.log(keys, values);
console.log(keys.length);  // count total property of the object
console.log(entries);  // create array of an array

for(let elem of keys) 
    console.log(elem, user[elem]);

delete user.age;  // delete user age
console.log(user);

// seal & freeze
const bankAccount = {
    accountHolderName: "Ahnaf",
    accountNumber: 12102,
    accountBalance: 500
}
Object.seal(bankAccount);  // can't delete or add any property

delete bankAccount.accountNumber;
console.log(bankAccount);  // can't delete

bankAccount.nominee = "Murgi Bhai";
console.log(bankAccount);  // can't add

bankAccount.accountBalance = 9999;
console.log(bankAccount);  // only edit

// freeze
const birthCer = {
    name: "Ashfaq", 
    age: 15,
    birthDate: "19-03-2010", 
    certificateNumber: 3542315352135231
}

Object.freeze(birthCer);  // can't add, delete, edit any properties

birthCer.name = "Sakin";
birthCer.address = "Dhaka";
delete birthCer.age;

console.log(birthCer);  // nothing change