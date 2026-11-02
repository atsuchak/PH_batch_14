function add(a: number, b: number): number {
    return a + b;
}
console.log(add(4, 2));

// no return fuction
function calculate(a: number, b: number): void {
    console.log(a + b);
}
calculate(4, 42);

// multi type parameter
function person(name: string, age: number, marks: number[], isStudent: boolean, dead?: boolean): void {
    console.log(name, age, marks, isStudent);
}
person('Suchak', 43, [90, 80, 70], true);

// Arrow function
const getLargerVal = (person1: number, person2: number): string => {
    return person1 > person2 ? 'Person1 is larger' : 'person2 is larger';
}
console.log(getLarger(4, 2));