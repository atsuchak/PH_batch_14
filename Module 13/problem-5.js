// Problem 5: Reverse a String

function revString(str) {
    let temp = '';  
    for(let st in str) 
        temp = str[st] + temp;

    return temp;
}

let str = 'Ahnaf Tajwar Suchak';
console.log(revString(str));