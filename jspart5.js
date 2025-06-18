//object literals
//used to store complex entities and keyed collections
//objects are a collection of properties
//each property is a key-value pair
//objects are mutable by default
const student = {
    name: "prem aman",
    age: 21,
    marks: 85,
    city:"munger"
}
//accessing the values form the object
console.log(student.name);
console.log(student["age"]);
//js automatically converts every object keys to string

// how to add or update tha value of the key
student["age"]=25;
student.city = "punjab";
student.gender = "male";//added new key value pair
console.log(student);

//object of object 
const classinfo = {
    prem:{
        grade: "A",
        city: "mumbai"
    },
    aman:{
        grade: "B",
        city: "delhi"
    },
    nayan:{
        grade: "C",
        city: "kolkata"
    }

}
console.log(classinfo.prem.grade);

//array of objects
const students = [
    {   name:"prem",
        grade: "A",
        city: "mumbai"},
    {grade: "B",
        name:"aman",
        city: "delhi"},
    {grade: "C",
        name:"nayan",
        city: "kolkata"}
    ]
console.log(students[0].name);


//math object
//properties
console.log(Math.PI);
console.log(Math.E);

//methods
console.log(Math.abs(-5));
console.log(Math.ceil(5.5));//equal or more
console.log(Math.floor(5.5));//equal or less
console.log(Math.round(5.4));//round of
console.log(Math.random());
console.log(Math.pow(10,2));
