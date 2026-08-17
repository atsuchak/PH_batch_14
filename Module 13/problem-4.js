// Problem 4: FizzBuzz (1 to N)
// Loop through numbers from 1 to n. If a number is divisible by 3, print "Fizz"; if divisible by 5, print "Buzz"; if divisible by both, print "FizzBuzz"; otherwise, print the number itself.

function checkFizzBuzz(value) {
    for(let i = 0; i <= value; i++) {
        if(i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
        else if(i % 3 === 0) console.log("Fizz");
        else if(i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
}

let num1 = 30;
checkFizzBuzz(num1);