const express = require("express");
const app = express();
console.dir(app);
let port  = 3000;
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})
// app.use((req,res)=>{
//     console.log("request recived");
//     // res.send("this is a basic response");
//     // res.send({
//     //     "name":"john",
//     //     "age":30
//     // })
//     let code = "<h1>Fruits</h1><ul><li>apple</li><li>mango</li><li>litchi</></ul>";
//     res.send(code);
// })
app.get("/",(req,res)=>{
    console.log("request recived");
    res.send("this is from root path");
})
app.get("/apple",(req,res)=>{
    console.log("request recived");
    res.send("this is from apple path");
})
app.get("/mango",(req,res)=>{
    console.log("request recived");
    res.send("this is from mango path");
})
app.get("/litchi",(req,res)=>{
    console.log("request recived");
    res.send("this is from litchi path");
})