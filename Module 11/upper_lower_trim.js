const name = "sUchAk";
console.log(name.toLowerCase());

const st1 = "hEllo WoRLd"; 
const st2 = "HELLO world"; 

if(st1.toLowerCase() === st2.toLowerCase()) console.log("Both texts are same")
else console.log("Both texts are not same")

const mail = "  murgiman@gmail.com  ";
const dbMail = "murgiman@gmail.com";

console.log(mail.trim());  // remove extra space from string first and last
console.log(mail.trimStart());  // remove extra space from string first 
console.log(mail.trimEnd());  // remove extra space from string last
if(mail.trim() == dbMail.trim()) console.log("Mail matched");
else console.log("Mail not matched");