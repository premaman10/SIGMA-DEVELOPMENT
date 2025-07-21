//REST
//Representational State Transfer
//it is an architecture style that defines a set of 
// constraints to be used for creating web services


//crud operatios
//types of request
//get - retrives resources
//post - submits new data to teh server 
//put - updates existing data
//patch - update existing data partially 
//delete - remove data


// what type of restful api we will create
// get /posts to get data for all posts//index route
//post /posts to add new post //create route
//get /posts/:id to get one post(using id)//view route
//patch /posts/:id to update specific post //update route
//delete /posts/:id to delete specific post //destroy route
const express = require ("express");
const app = express();
const port  = 3000;
const path = require("path");

app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, "public")));


let posts = [
    {
        username: "prem aman",
        content: "i want placement"
    },
    {
        username: "prem ",
        content: "i want job"
    },
    {
        username: " aman",
        content: "i want gt650"
    },
    {
        username: "nayan",
        content: "i want naukri"
    },

]

app.get("/posts",(req,res)=>{
    // res.send("server running ");
    res.render("index.ejs",{ posts });
})
app.post("/posts")


app.listen(port,()=>{
    console.log("listening to port: 3000");
})