const mail = "suchak@gmail.com";

// Includes
if(mail.includes('@')) console.log("Mail");
else console.log("Not mail");


// Ends with
if(mail.endsWith(".com")) console.log("Again Mail");
else console.log("Still not mail")


// Starts with
const twitter = "@suchak";
if(twitter.startsWith("@")) console.log("Its twitter");
else console.log("Not twitter");


// Slice
const name = "Ahnaf Tajwar Suchak";
console.log(name.slice(3, 12));  // from 3rd index to before 12th index
console.log(name.slice(-5));  // from last


// Concat
const anotherName = "Ahnaf Tajwar";
const anotherAnotherName = "Suchak";
console.log(anotherName + " " + anotherAnotherName);


// Split
const aStr = "Hello World, How are you";
const str = aStr.split(' ');  // split according to " "
console.log(str);