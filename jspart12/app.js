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
// let h1 = document.createElement('h1');
// h1.innerText = "Prem Aman";
// document.body.append(h1);
// function changecolor(color,delay){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             h1.style.color = color;
//             resolve("color changed");
//         },delay);
//     })
// } 
//  async function demo() {
//     await changecolor("red",1000);
//     await changecolor("blue",1000);
//     await changecolor("green",1000);;
//     await changecolor("yellow",1000);
//     await changecolor("purple",1000);
//  }
//  demo();



 //handling rejection with await
//  we will put the cdoe in try block whrere code can go wrong
//  and we will use catch block to handle the rejection




//API(APPLICATION PROGRAMMING INTERFACE)
//it return data in JSON form 
//it is used to fetch data from server
//json data is made for to be read by computer
//javascript object notation 
//earlier api's return the dta ain the form of xml 
//but nowadays it returns in json
//in json the key are in the form of string 
// but in js object the key value are not in String
//in json there is nothing like undefined
// to parse the json data into js object we use parse method
// let jsondata ='{"name":"prem","age":"20"}'
// let res = JSON.parse(jsondata);
// console.log(res.name);
// //to ocnvert js object into json data we willuse stringify
// let studnet={
//     "name":"prem",
//     "age":20
// }
// console.log(JSON.stringify(studnet));

//testing api request 
//tools
//postman
//hoppscoth


//ajax
//ajax stands for asynchronous javascript and xml
//http verbs
//get
//post
//delete


//status code
//200 okay
//404 not found
//400 bad request
//500 internal server error

//our first api request
//we will use fetch api to make the api request
let url = "https://catfact.ninja/fact";
// fetch(url)//it will return as promise
// .then((res)=>{
//     console.log(res);
//     //dtaa is redable stream but cant be read
//     //we need to convert it into json data
//     return res.json();
// })
// .then((data)=>{
//     console.log("firstfact",data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("secondfact" ,data2.fact);
// })
// .catch((err)=>{
//     console.log("Error - ",err);
// });

// using fetch with async await

// async function getfacts() {
//     let res = await fetch(url);
//     console.log(res);
//     let data = await res.json();
//     console.log(data.fact);
// }


//axios library to make http request
//axios is a promise based library
let btn = document.querySelector("button");
btn.addEventListener("click",async ()=>{
   let fact = await getfacts();
   console.log(fact);
   let p = document.querySelector("p");
   p.textContent = fact;
})
async function getfacts() {
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }
    catch(err){
        console.log("Error - ",err);
        return "No fact founc";
}
}