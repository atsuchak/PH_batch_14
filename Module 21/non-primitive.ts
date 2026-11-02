// Array 
let number: number[] = [1, 2, 3, 4, 5];
console.log(number);

// Object
let student: {name: string, id: number, isStudent: boolean} = {
    name: 'Suchak',
    id: 43,
    isStudent: true;
}
student.name = "Sakin";
console.log(student);

// Object with optional property
let book: {name:string, age: number, isAuthor: boolean, price: number, pages?: number} = {
    name: 'John Doe',
    age: 30,
    isAuthor: true,
    price: 500
}

console.log(book);