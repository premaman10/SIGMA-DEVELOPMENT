const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const instadata = require("./data.json")
// Set view engine to EJS
app.set("view engine", "ejs");

// Set views directory (important if not in root)
app.set("views", path.join(__dirname, "views"));

// Home route
app.get("/", (req, res) => {
    res.render("home");
});

// Simple hello route
app.get("/hello", (req, res) => {
    res.send("hello");
});

// Instagram-like route
app.get("/ig/:username", (req, res) => {
//    const follower = ["a","b","c","d","e","f"];
    const { username } = req.params;
//     res.render("insta", { username,follower}) ;
const data = instadata[username];
console.log(instadata);
res.render("insta",{data});
});

// Dice route
app.get("/rolldice", (req, res) => {
    const num = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice", { num });
});

// Start server
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});


//how to serve static files 
// app.use(express.static(folder.name));
//it need details inside public folder as for ejs file we needed files in view folder
app.use(express.static("public"));