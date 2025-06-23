// //forEach function
// let arr = [9,8,7,6];
// let print = function(e){
//     console.log(e);
// }
// arr.forEach(print);

// //Map
// let arr1 = [9,8,7,6];
// let double = arr1.map(function(e){
//     return e*2;
// });
// console.log(double);

// let students =[
//     {
//         name:"prem",
//         marks: 98,
//     },{
//         name: "aman",
//         marks:97,
//     },
//     {
//         name: "kumar",
//         marks: 99,
//     }
// ]
// let gpa = students.map((e)=>{
//     return e.marks/10;
// }); 

// //filter 
// let nums = [5,6,7,,83,7,9,4,6,78,];
// let even  = nums.filter((num)=>{return num%2==0})

// //every mwthod retunr true if every elements of array gives true fo rsome function
// let arr2 = [2,8,4,6];
// let check = arr2.every((e)=>{
//         return e%2==0;
// });
// console.log(check);

// //reduce it reduces the array to a single value
// let arr3 = [1,2,3,4,5];
// let res= arr3.reduce((res,al)=>{
//     return res+al;
// });
// console.log(res);


// //maximum in array
// let arr4 = [1,2,3,4,5];
// let max = arr4.reduce((max,al)=>{
//     if(max<al){
//         return al;
//     }
// });
// console.log(max);

// //check all number are multiple of 10 or not
// let arr5 = [10,20,30,40,50];
// let check10 = arr5.every((e)=>{
//     return e%10==0;
// });
// console.log(check10);

// //minimum in array
// let arr6 = [1,2,3,4,5];
// let min = arr6.reduce((min,al)=>{
//     if(min<al){
//         return min;
//     }
// });
// console.log(min);


// //defaul parameter
// function greet(name="prem"){
//     console.log("hello "+name);
// }
// greet();

// //spread operator expands an iterable into multiple values
// let arr7 = [1,2,3,4,5];

// function parr(arr7){
//     console.log(...arr7);
// }
// parr(arr7);
// let chars = [..."hello"];//it will spread the string into array of characters that ahave 5 characters
// console.log(chars);//it will print as key value pair 


// let data ={
//     name:"prem",
//     email:"amanprem374@gmail.com",
//     password:1234
// };
// const datacopy = {...data}
// console.log(datacopy);


// //rest allows a fucntion to tak eana indefinite number of arguments
// //and bundle them in array
// function sum (...args){
//     let sum = 0;
//     for(let i=0;i<args.length;i++){
//      sum+=args[i]
//     }
//     return sum;
// }

// console.log(sum(1,2,3,4,5));



// //destructuring stroing vlaues of array into multiple variables
// let names =['a','b','c','d'];
// let[winner,...others] = names;
// console.log(winner,...others);

// const stu ={
//     name:"prem",
//     age:25,
//     gender:"male",
//     marks: [98,97,76,87,78]

// }
// let {gender:malefemale,age:umar} = stu;
// console.log(umar) ;

// //ASSIGNMENT
// //square and sum the array elements using the arrow function and then find the average of the array
// let nom = [1,3,4,6,7];
// let sq = nom.map((no)=>no*no);
// let som = sq.reduce((a,b)=>a+b);
// let avg = som/nom.length;
// console.log(avg);
//create a new array using the map function whose each element is equal to the original element plus 5
let num = [1,2,3,4,5];
let plus5 = num.map((num)=>num+5);
console.log(plus5);
//Create a new array whose elements are in uppercase of words present in the original array.
let arr = ['a','B','c','D','e','F'];
let upper = arr.map((word)=>{
    return word.toUpperCase()
})
console.log(upper);
//write a function called doubleandreturnargs which accept an array and a variable number of arguments 
//teh function should return a new array with the 
//original array values and all of the additional arguments doubled
function doubleandreturnargs(arr,...args){
    let newarr = [...arr];
    let newarg = args.map((arg)=>arg*2);
    return [...newarr,...newarg];
}
console.log(doubleandreturnargs(num,1,2,3,4,5));
