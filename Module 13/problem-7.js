// Porblem 7: Check if a string is a palindrome or not

function chkPalindrome(str) {
    for(let i = 0; i < str.length/2; i++) {
        if(str[i] !== str[str.length-i-1]) return false;
    }

    return true;
}

let str1 = 'madam';
let str2 = 'Shorok';
if(chkPalindrome(str2)) console.log('Palindrome');
else console.log('Non palindrome');