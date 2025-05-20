console.log("hello from index.html");
let priceofpencil = 10;
let priceofpen = 20;
console.log("the total you have to pay",(priceofpen+priceofpencil),"rupees");
//better waY TO PRINT THIS THING
let totalprice = priceofpen+priceofpencil;
console.log(`the total you have to pay ${totalprice} rupees`);
//comparison operators
// > >= < <= == !=
//== compares value but not type of variable
//=== compares both type and value of variable
//conditional statement 


//if else
let age = 18;
if(age>=18){
    console.log("you can vote");
}else{
    console.log("you cannot vote");
}
let color = "green";
if(color==="red"){
    console.log("stop");
}
else if (color==="yellow"){
    console.log("wait");
}
else if(color==="green"){
    console.log("go");
}

//nested if else
let marks = 33;
if(marks>=33){
    if(marks>=90){
        console.log("topper");
    }
    else{
        console.log("pass");
    }
}
else{
    console.log("fail");
}
//switch loop
let day = "monday";
switch(day){
    case "monday":
        console.log("somwar");
        break;
    case "tuesday":
        console.log("mangalwar");
        break;
    case "wednesday":
        console.log("budhwar");
        break;
    case "thursday":
        console.log("sukrwar");
        break;
    case "friday":
        console.log("guruwar");
        break;
    case "saturday":
        console.log("shaniwar");
        break;
    default:
        console.log("raviwar");
    
}


///alert or prompt
let n = prompt ("Eneter your name");
console.log(n);
// alert("something is wrong");hii


//
