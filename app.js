const express = require('express')
const app = express();
const port = process.env.PORT || 3001;
const path = require('path')


app.listen(port, () => {
    console.log("Servidor funcionando en puerto localhost:"+port)
});

app.use(express.static("public"));

app.get("/",(req,res) => {
    res.sendFile(__dirname+"/views/home.html");
});
app.get("/register",(req,res) => {
    res.sendFile(__dirname+"/views/register.html");
});

app.get("/login",(req,res) => {
    res.sendFile(__dirname+"/views/login.html");
});