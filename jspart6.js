//FUNCTIONS
 function funcname(){
    console.log("from function");
 }
 funcname();
 let randomnum = Math.floor(Math.random()*6)+1;
 function rolldice(){
    console.log(randomnum);
 }
 rolldice();

 //function iwth arguments
 function greet(name,age){
    console.log("Hello "+name+" you are "+age+" years old");
 }
 greet("Prem",22);
 function avg(n,m,a){
    let sum = n+m+a;
    console.log(sum/3);
 }
 avg(10,20,30);
 function table(n){
    for(let i = n;i<=n*10;i+=n){
        console.log(i);
    }
 }
 table(4);


 //return keywordd
 function sum(n,m){
    return n+m;
 }
 console.log(sum(10,19));
 

 //create a function that return concatenatuon of lal string in the array
 let arr = ["prem","aman","hii","hello"];
 function concatstrings(arr){
   let res = "";
   for(let i =0;i<arr.length;i++){
      res+=arr[i];
   }
   return res;
 }
 console.log(concatstrings(arr));

 //scope
 //it determines teh accessibility of variable ,obj,a nd function form different parts of the code
 //function scope
 //block scope

 //lexical scope 
 function outerscope(){ 
   function innerscope(){
      console.log(x);
      console.log(y);
   }
   let x = 8;
   let y = 10;
   innerscope();
 }
 outerscope();
 //variable hoisting is the technique through which we can declare
 //variable in outer scope after using it in inner scope but if we tryu to do vice versa it is not possible
 

 //function expression
 let add = function(a,b){
   return a+b;
 }
 console.log(add(10,20));

 //methods
 //action that can be performed on an object
 //methods are functions that are defined inside an object
 const calc = {
   add: function(a,b){
      return a+b;
 },
   sub: function(a,b){
      return a-b;
   },
   mul: function(a,b){
      return a*b;
      },
   div: function(a,b){
   return a%b;
      }
}
console.log(calc.sub(20,30));

//asssignment
//q1 write a js fucntion that returns array elemnet larger than a number 
let num = 10;
let numbers = [10,78,9,87,54,4,3,67];
function largerthan (num,arr) {
 for(let n of numbers){
   if(n>num){
      console.log(n);
   }
 }
}
largerthan(num,numbers);

//q2 write  a js function to extract y=unique character from a string
let str = "hello world";
function uniquechar(str) {
   let unique = [...new Set(str)].join("");
   console.log(unique);
   }
uniquechar(str);
