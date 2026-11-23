interface User {
    name: string;
    age: number;
    email: string;
    isAdmin: boolean;
}

const aluMan: User = {
    name: "Alu Man",
    age: 25,
    email: "aluman@gmail.com",
    isAdmin: true
}

const aluWoman: User = {
    name: "Alu Woman",
    age: 22,
    email: "aluwoman@gmail.com",
    isAdmin: false
}

const team: User[] = [aluMan, aluWoman, {
    name: "Alu Child",
    age: 5,
    email: "child@gmial.com",
    isAdmin: false
}];

function printUser(user: User): void {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
    console.log(`Is Admin: ${user.isAdmin}`);
}
printUser({name: "Alu Man", age: 25, email: "aluman@gmail", isAdmin: true});

function showUser({name, age, email, isAdmin}: User): void {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Email: ${email}`);
    console.log(`Is Admin: ${isAdmin}`);
}
showUser(aluWoman);

// both functions are same