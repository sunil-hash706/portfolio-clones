const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.get("/home", function(req,res){
    res.send("hii there");
});
app.get("/praicing", function(req,res){
    res.send("free of cost");
});

app.post("/",function(req, res){
    let message = req.body.message;
    let Email = req.body.email;

    fs.appendFile(__dirname+"/data.txt"," \n \n message is : - "+message+ " \n Email is :-  "+Email,function(err){
        if(err) throw err;
        console.log('IS WRITTEN')
        });
    res.send("your message is :- " + message + " sent to the saerver" )
})


app.listen(3000, function(){
    console.log("Server started at port 3000");
})