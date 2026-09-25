/* 
    Passing Students Filter:
    getPassingStudents(students, threshold) - return only the students whose marks are greater than or equal to the given threshold.

    Input:
        Students = [
            {name: "Rafi", marks: 75},
            {name: "karim", marks: 40},
            {name: "Suchak", marks: 60}
        ]
        threshold = 60

    Output: 
        [
            {name: "Rafi", marks: 75},
            {name: "Suchak", marks: 60}
        ]
*/

// let student = [
//     {name: "Rafi", marks: 75},
//     {name: "karim", marks: 40},
//     {name: "Suchak", marks: 60},
//     {name: "Akash", marks: 59}
// ]


let getPassingStudents = (students, threshold) => {
    let filteredStudents = students.filter(student => {
        return student.marks >= threshold;
    });
    return filteredStudents;
}

let student = [
    {name: "Rafi", marks: 75},
    {name: "karim", marks: 40},
    {name: "Suchak", marks: 60},
    {name: "Akash", marks: 59}
]
console.log(getPassingStudents(student, 60));