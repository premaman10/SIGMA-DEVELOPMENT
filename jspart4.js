// for loop
for (var i = 0; i < 10; i++) {
    console.log(i); // output -> 0 1 2 3 4 5 6 7 8 9
}

// print odd numbers
for (var i = 1; i <= 10; i += 2) {
    console.log(i); // output -> 1 3 5 7 9
}
//print even numbers
for(var i =2;i<=10;i+=2){
    console.log(i); // output -> 2 4 6 8 10
}
//nested loop
for(var i =1;i<=3;i++ ){
    for(var j = 1;j<=3;j++){
        console.log(j); 
    }
}
//while loop
let n = 1;
while(n<=5){
    console.log(n);
    n++;
}

//guess game
// let favmovie = "mufasa";
// let guess = prompt("Guess my favorite movie");
// while(guess!=favmovie){
//     console.log("WRONG");
//     guess = prompt("Guess again");
// }
// if(guess==favmovie){
//     console.log("CORRECT");
// }
//loop with array 
let fruits = ["apple","banana","cherry"];
for(let i =0;i<fruits.length;i++){
    console.log(fruits[i]);
}
//for of
for(let fruit of fruits){
    console.log(fruit);
}
for(char of "apnacollege"){
    console.log(char);
}