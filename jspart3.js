console.log("PART THREE");
let msg = "    hello     ";
msg.trim();
console.log(msg);

//strings are immutable
let str = "hello     ";
let newstr = str.trim();
console.log(newstr);//
console.log(str);//hello     

let lower = str.toLowerCase();
console.log(lower);
let upper = str.toUpperCase();
console.log(upper);
let message = "hi my name is prem aman";
message.indexOf("prem");//14

//slice
let str1 = "ilovecoding"
let slice = str1.slice(2, 7);//both inclusive
console.log(slice);
//replace
let str2 = "ilovecoding";
let replace = str2.replace("love", "hate");
console.log(replace);