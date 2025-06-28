// // async function greet(params) {
// //     // throw ("some random error");
// //     return "hello";
// // }
// // greet()
// // .then(()=>{
// //     console.log("promise resolved");
// // })
// // .catch((err)=>{
// //     console.log("promise rejected");
// // })

// let demo = async ()=>{
//     return("demo");
// }
// demo();//it will return fulfilled request

// //await fucntion pauses the exerctution of its surrounding async function
// // until the awaited promise is resolved or rejected
// function getnum() {
//     return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         let num = Math.floor((Math.random() * 10)) + 1;
//         console.log(num); 
//         resolve();
//     },1000) ;
//     });
// }

// async function show() {
//   await getnum();
//   await getnum();
//    await getnum();
//    //at a single time they all will print the numbers
//    //we have to use await to take it time
// }
// show();



//now we will use awit and async funtion fo rthe olor change code
//to  make it more clean and better and efficient 
let h1 = document.createElement('h1');
h1.innerText = "Prem Aman";
document.body.append(h1);
function changecolor(color,delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed");
        },delay);
    })
} 
 async function demo() {
    await changecolor("red",1000);
    await changecolor("blue",1000);
    await changecolor("green",1000);;
    await changecolor("yellow",1000);
    await changecolor("purple",1000);
 }
 demo();



 //handling rejection with await
//  we will put the cdoe in try block whrere code can go wrong
//  and we will use catch block to handle the rejection




//API(APPLICATION PROGRAMMING INTERFACE)
//it return data in JSON form 
//it is used to fetch data from server
