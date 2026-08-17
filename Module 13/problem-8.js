// Problem 8: Count words in a sentence

function cntWords(str) {
    let cnt = 1;
    let words = ' ';

    for(let i = 0; i < str.length; i++)
        if(words.includes(str[i])) cnt++;

    return cnt;
}

let word = 'Ah1naf3 S2 TAjwar sakin hmm';
console.log(cntWords(word));