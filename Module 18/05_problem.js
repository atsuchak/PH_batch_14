/* 
    Arrow Funtion with Multiple Conditoins
    Write an arrow function that assigns a grade based on marks.
    90+ -> "A+", 80-89 -> "A", 60-79 -> "B", below 60 -> "Fail"

    Example: getGrade(95) -> "A+"
    Example: getGrade(82) -> "A"
    Example: getGrade(45) -> "Fail"
*/

const getGrade = (mark) => {
    if(typeof mark != "number") return `Invalid`;
    else if(mark >= 90) return `A+`;
    else if(mark >= 80) return `A`;
    else if(mark >= 60) return `B`;
    else return `Fail`;
}

console.log(getGrade(90));
console.log(getGrade(82));
console.log(getGrade(45));