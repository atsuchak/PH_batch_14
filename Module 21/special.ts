function addTwoNumbers(a: number | string, b: number): number {
    if(typeof a === 'string') {
        a = parseFloat(a);
    }

    return a + b;
}

console.log(addTwoNumbers('', 12));

// null
const myFuture: number | null = null;

// undefined
let myUndefinedVariable: undefined = undefined;

// any
const myVariable: any = 'Hello World';

// unknown
let myUnknownVariable: unknown = 10;
myUnknownVariable = 'Hello World';
myUnknownVariable = true;

// never
function throwError(message: string): never {
    throw new Error(message);
}