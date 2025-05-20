console.log("PART THREE");
let msg = "    hello     ";
msg.trim();
console.log(msg);

//strings are immutable(if we chnge anything it will create new string)
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

//Array Data Structure
let students = ["aman","prem","javascript","ram","sita"];
console.log(students);
console.log(students.length);
//we can store different type of elemets in single array 
//if we typeof studnets it will come objectr
console.log(typeof students);
let my =[];//empty array
console.log(my.length);
//arrays are mutuable (chnges will occur in already defined variable)
//METHODS
//push
students.push("geeta");//add element to last position
console.log(students);
//pop
students.pop();//removes the last element
console.log(students);
//shift
students.shift();//removes the first element
console.log(students);
//unshift
students.unshift("sita");//add element to first position
console.log(students);
//indexof method index of th element 
console.log(students.indexOf("javascript"));
//include to check whter element is there in array or not
console.log(students.includes("javascript"));
//concatenate
let teachers = ['laxman','karan','tapu'];
console.log(students.concat(teachers));
//reverse
console.log(students.reverse());
//slice 
console.log(students.slice(1,4));
//splice (startindex,deletecount,items);
students.splice(1,1,"java","python");
console.log(students);
//sort
console.log(students.sort());
//array refrence 
let arr = ['a','b','c','d'];
let arr1 = arr;
console.log(arr1);
arr1.push('e');
console.log(arr);
//constant array
const arrnum = [1,2,3,4,5,6];//it will have fixed adress abut we can chnange the variables inside it 
//nested array
let nest = [[1,2],[3,4],[5,6]];
console.log(nest);

