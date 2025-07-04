//we learn about object here
const student = {
    name: 'John',
    age: 20,
    marks:98,
    getmarks:function(){
        return this.marks;
    }
}
const student1 = {
    name: 'ram',
    age: 22,
    marks:90,
    getmarks:function(){
        return this.marks;
    }
}
//here we are repeating obejcts tehre keys and the getmarks function
//which is very inefficient way of writing code
//in oops we will create clas for the thing which are being used more than 100 times or more than that 
//and every object will use tha same class for the functions 
//in this case function will take space only siingle time 
//object prototype
let arr = [1,2,3,4,5,6]
arr.sayhello =()=>{
    console.log('hello');
}

// every object in javascript is having built in property which is called its prototype
//prototype is the object from which the object is created



//factory function  is a function that creates objects
// function personmaker(name,age){
//     const person = {
//     name: name,
//     age: age,
//     talk(){
//         console.log(`hi my name is ${this.name}`);
//     }
//     };
//     return person;
// }
// it will also create a copy of the function and is taking space in memory


//new operator lets developer create na instance of a user defied object type  or 
// one of teh built in object types that has a constructor function
//constructor doesnt return anything basically it starts with capiatl letter 
// function Personmake(name,age){
//    this.name = name;
//    this.age = age;
// }
// let p1 = new Personmake("aman",21);
// let p2 = new Personmake("prem",22);
// console.log(p1);
// console.log(p2);

//classes are a template  for creating objects
//the contructor method is a special method of a class
//for creating and initializing an object instance of that class


class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`hi my name is ${
            this.name}`);
    }
}
// talk function is going inside prototype


//inheritance


