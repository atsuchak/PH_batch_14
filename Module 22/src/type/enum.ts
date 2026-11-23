enum Day {
    Monday, 
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

const offDay = Day.Sunday;
console.log(offDay); // Output: 6

enum Roles {
    Admin = 'Admin',
    Moderator = 'Moderator'
}
console.log(Roles.Admin); // Output: Admin

const alu = {
    name: 'Potol',
    role: Roles.Moderator
}
console.log(alu.role); // Output: Moderator