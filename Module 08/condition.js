// if condition

if(8 > 10) {
    console.log("8 is greater than 10");
}else {
    console.log("8 is not greate than 10");
}

let age = 18;
if(age >= 18 && age < 100) {
    console.log("Valid age");
}else {
    console.log("Invalid age");
}


// else if condition 

let mark = 50;
if(mark > 90) console.log("A");
else if(mark > 85 && mark < 90) console.log("A-");
else if(mark > 81 && mark < 86) console.log("B+");
else if(mark > 77 && mark < 82) console.log("B");
else if(mark > 73 && mark < 78) console.log("B-");
else if(mark > 69 && mark < 74) console.log("C+");
else console.log("Fail");