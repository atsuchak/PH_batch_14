/* 
    Add Grade to Each Student (Without Changing Original)

    You have an array of student objects, each with name and marks. Create a new array every student also has a "grade" field, based on their marks. The original array must stay exactly the same.

    Grading rule: 
        marks >= 90 -> "A+"
        marks >= 80 -> "A"
        marks >= 60 -> "B"
        below 60 -> "Fail"

    Input:
        [
            {name: "Rafi", marks: 85}
            {name: "Karim", marks: 45}
        ]
    
    Output:
        [
            {name: "Rafi", marks: 85, grade: "A"}
            {name: "Karim", marks: 45, grade: "Fail"}
        ]

    Original array must remain untouched (no "grade" field added to it).
*/

const addGrade = (student) => {
    const newStudent = student.map((student) => {
        const {name, marks} = student;

        const studentWithGrade = {name, marks};

        if(marks >= 90) studentWithGrade.grade = `A+`;
        else if(marks >= 80) studentWithGrade.grade = `A`;
        else if(marks >= 60) studentWithGrade.grade = `B`;
        else studentWithGrade.grade = `Fail`;

        return studentWithGrade;
    });
    
    return newStudent;
}

let student = [{name: "Rafi", marks: 85}, {name: "Karim", marks: 45}];

console.log(addGrade(student));