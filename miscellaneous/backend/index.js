const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended : true}));
//if data is json than we have to write
app.use(express.json());
app.get("/register",(req,res)=>{
    let {user, pass }= req.query;
    res.send(`standard GET response,Welcome  ${user}  your pass is ${pass}`);
})
app.post("/register",(req,res)=>{
    let {user, pass }= req.body;
    res.send(`standard POST response, Welcome ${user}`);
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})