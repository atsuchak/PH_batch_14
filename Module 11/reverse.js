const info = "Hello, I'm Ahnaf Tajwar Suchak from Dhaka, Bangladesh";

// 1st method
const parts = info.split("");
const revParts = parts.reverse();
const revInfo = parts.join("");  // join parts
console.log(parts);
console.log(revParts);
console.log(revInfo);


// 2nd method
let revAnotherInfo = "";
for(const letter of info) {
    revAnotherInfo = letter + revAnotherInfo;
}
console.log(revAnotherInfo);