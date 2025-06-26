// let btn = document.querySelector("button");
// // btn.onclick = function(){
// //     alert("buton click");
// // }
// // function sayhello(){
// //     alert("hello");
// // }
// // btn.onclick = sayhello;
// // btn.onmouseover= function(){
// //     alert("mouseover");
// // }

// //event listener why to use bcoz earlier we were able to have only one function
// //butr if we want  more than one function to run after clicking 
// //we can use event listener
// btn.addEventListener("click",function(){
//     console.log("button clicked");
// });
//activity
// let btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     let h3 = document.querySelector("h3");
//     let randomcolor = getrandomcolor();
//     h3.innerText = randomcolor;
//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomcolor;
// })
// function getrandomcolor(){
//     let r = Math.floor(Math.random()*256);
//     let g = Math.floor(Math.random()*256);
//     let b = Math.floor(Math.random()*256);
//     let color = `rgb(${r}, ${g}, ${b})`; 
//     return color;
// }
// let p = document.querySelector("p");
// p.addEventListener("click",function(){
//     alert("para clicked");
// })
// let box = document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     alert("mosue inside box");
// })

// //this keyword in event listener when this is used in
// //a callback of event handler of something it refers to that something
// let btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     this.style.backgroundColor="blue";
// })

//keyboard events
// let btn = document.querySelector("button");
// let input = document.querySelector("input");
// input.addEventListener("keydown",function(){
//     alert ("key pressed");
// })

//form event
let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();//this will stop forwarding to other webpage 
//     alert("submited");
// });
// //extracting form data
form.addEventListener("submit",function(event){
    event.preventDefault();
//     let username = document.querySelector("#user");
//     let pass = document.querySelector('#pass');
//     let user = username.value;
//     let passw = pass.value;
//     alert(user);
//         alert(passw);
})

//change event 
//it occurs when the value of an element has been changed
//only works on <input>,<textarea> and <select> elements.
//input event
// it fires when the value of an <input> , <select> or <textarea> elements has been changed
let user = document.querySelector("#user");
user.addEventListener("change",function(){
     console.log("input changed");
     console.log("final value",user.value);
});
let pass = document.querySelector("#pass");
pass.addEventListener("input",function(){
    console.log("input changed");
    console.log("final value",pass.value);
});