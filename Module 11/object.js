const cap = ['ekta cap', 'valo brand', '500 taka', 'Blue color'];

const sunglass = {
    color: 'White', 
    price: 500, 
    brand: 'Valu brand'
}

const mobile = {
    color: 'Black',
    price: 15000,
    isThreeCam: false,
    isSecondHand: false,
    apps: ['fb', 'insta', 'whatsapp', 'ar kisu nai']
}

const person = {
    name: 'Ahnaf Tajwar Suchak',
    proffession: 'Student', 
    age: 22,
    isFailed: false,
    'home address': 'Bangladesh'
}

// dot notaion
console.log(person);
console.log(person.name);
console.log(person.age);

person.age = 32;
console.log(person.age);


// bracket notaion
console.log(person['home address']);  // use only when a variable name is more than 1 word

const key = 'proffession';
console.log(person[key]);