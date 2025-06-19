//this key word
//is used to identify the key
const student={
    "name":"Prem",
    "age":20,
    "city":"Delhi",
    "marks":90,
    getsummarkage(){
        console.log( `${this.marks}`+`${this.age}`);
    }
}
student.getsummarkage();
console.log(this);//this wiil print windows object
// window.alert("checking window");

//try and catch
//try block allows you to  define a block of code to be tested for errors while it is being executed
//catch block allows you to define a block of code to be executed, if an error occurs in the try block

try{ 
console.log(a);
}
catch {
    console.log("variable a is not declared"); 

}

//miscellaneous topics 
//arrow function
const func = (a,b)=>{
    console.log(a+b);
}
func(10,20);
//arrow function with implicit return
const mul = (a,b)=>(a*b);
console.log(mul(10,20));

//settimeout function
//settimeout function is used to execute a function after a specified time
//settimeout function takes two arguments, first is the function to be executed and second is the time
// setTimeout(function(){
//     console.log("learn javascript");
//     },3000);
// console.log("Welcome to");


//setinterval
//setinterval function is used to execute a function at specified intervals
//setinterval function takes two arguments, first is the function to be executed and second is the time

// let id = setInterval(function(){
//     console.log("learn javascript");//it will run indefently 
//     },3000);
//     console.log("Welcome to");
//     console.log(id);
    //clearinterval function is used to stop the execution of a function at specified intervals
    // clearInterval(id); to stop the function


//function ka this calling object ks scope pa depend hota h
//arrow function ka this  ka scope parent scope wahi scope hota h

const stu = {
    name :"aman",
    marks : 98,
    prop : this,//global scope
    getname:function(){
        console.log(this);
        console.log(this.name);
    },
    getarrow: ()=>{
        console.log(this);//parent's scope
        console.log(this.marks);
    },
    getinfo1:function(){
        setTimeout(()=>{
            console.log(this);//student
        },2000);
    },
    getinfo2:function(){
        setTimeout(function(){
            console.log(this);//window   
    },2000);
}
};
stu.getname();//this will print about stu and aman
stu.getarrow();//this will print about windows and undefined




// let id = setInterval(()=>{
//     console.log("hello");
// },2000);

// setTimeout(()=>{
//     clearInterval(id);
//     console.log("cleared");
// },10000);

///ASSIGNMENT
// Qs1.Write an arrowfunction named array Average
//  that accepts an array of numbers and 
// returns the average of those numbers
let arr = [1,2,3,4,5];
let avg  = (arr)=>{
    let sum = 0;
    for(let i = 0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sum/arr.length;
}
console.log("Average of the array "+avg(arr));






// Qs2.Write an arrow function named isEven() 
// that takes a single number as
// argument and returns if it is even or not.
let isEven = (num)=>{
    if(num%2==0){
        return "Even";}
    else{
        return "Odd";
    }
}
