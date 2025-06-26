//js call stack 
// function hello(){
//     console.log("this is hello function");//third
//     console.log("Hello, World!");//forth
// }
// function demo(){
//     console.log("This is a demo function");//second
//     hello();
// }
// console.log("calling demo func");//first
// demo();
// console.log("done with eevrything")//fifth
//visualizing  the call stack 
// function one(){
//     console.log("one is called");
//     return 1;
// }
// function two(){
//     console.log("two is called");
//     return one()+one();
// }
// function three(){
//     let ans =  two()+one();
//     console.log(ans);
// }
// three();

// //breakpoint
// // A breakpoint is a debugging tool used in programming to pause the execution of your code
// //  at a specific line, so you can inspect what's happening at that moment. 


// //js is a single threaded
// let a = 35;
// console.log(a);
// let b= 10;
// console.log(b);
// console.log(a+b);
// //

// let h1 = document.createElement('h1');
// h1.textContent = "Hello, World!";
// document.querySelector("body").append(h1);
// function chnagecolor(color,delay,nextcolorchange){
//     setTimeout(()=>{
//         h1.style.color = color;
//         nextcolorchange();
//     },delay);
// }
// // chnagecolor("green",1000);
// // chnagecolor("yellow",2000);
// // chnagecolor("yellow",3000);

// //callback nesting is known as CALLBACK HELL
// //to be safe form this we use promise async and wait keyword
// chnagecolor("red",1000,()=>{
//     chnagecolor("green",1000,()=>{
//         chnagecolor("yellow",1000,()=>{
//             chnagecolor("blue",1000);
//         });
//     });
// });

// //PROMISES
// //A promise is a result of an asynchronous operation
// //it is a placeholder for a value that may not be available yet
// //it is used to handle asynchronous operations in a more manageable way



// function savetodb(data,success,failure){
//     let  internetspeed = Math.floor(Math.random()*10)+1;
//     if(internetspeed>4){
//         success();
//     }else{
//         failure();
//     }
//     console.log("your data was saved");
// }
// savetodb("apna college",()=>{
//     console.log("data saved");
//         savetodb("hello",()=>{
//         console.log("data2 saved");
//         },()=>{
//         console.log("data2 not saved");
//         });
// },()=>{
//     console.log("data not saved");
// });
//promise object represents teh eventual completion 
// or failure of an asynchronous operation and its resulting values
//promise have resolve and reject


// function savetodb(data){
//     return new Promise((resolve,reject)=>{
//         let  internetspeed = Math.floor(Math.random()*10)+1;
//         if(internetspeed>4){
//             success();
//         }
//         else{
//             failure();
//         }
// });
// }
// savetodb("Apna college");
//promise have two methods then() and catch()
// let request =  savetodb("Apana  College");
// request.then((data)=>{
//     console.log("promise resolved");
//     console.log(request)
// })
// .catch(()=>{
//     console.log("promise rejected");
//     console.log(request);
// });


//promise chaining
function savetodb(data){
    return new Promise((resolve,reject)=>{
        let  internetspeed = Math.floor(Math.random()*10)+1;
        if(internetspeed >4){
            resolve("success : data was saved")
        }else{
            reject("failure : data not saved")
        }
    });
}