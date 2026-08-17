// Problem 6: Count vowel

// my approach
function cntVowel(str) {
    let cnt = 0;
    for(let st in str) 
        if(str[st] === 'a' || str[st] === 'e' || str[st] === 'i' || str[st] === 'o' || str[st] === 'u' || str[st] === 'A' || str[st] === 'E' || str[st] === 'I' || str[st] === 'O' || str[st] === 'U') cnt++;
    
    return cnt;
}

// PH approach
function countVau(str) {
    let vowel = 'AEIOUaeiou';

    let cnt = 0;
    for(let st in str) 
        if(vowel.includes(str[st])) cnt++;
    
    return cnt;
}

let str = 'Ahnaf Tajwar Suchak';
console.log(cntVowel(str));  // Me
console.log(countVau(str));  // PH