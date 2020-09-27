// jshint ES version 6
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { static } = require("express");
app.use(bodyParser.urlencoded({extended: true}));
app.use(static(__dirname + "/"));
let users = [
    {
        username: "user1",
        password: "user1"
    },
    {
        username: "user2",
        password: "user2"
    }
];

let facebookUsers = [
    {
        username: "fuser1",
        password: "abcdef"
    },
    {
        username: "fuser2",
        password: "abcdef"
    }
];
app.get("/login", function(request, resposne){
    resposne.sendFile(__dirname + "/signin.html");
});

app.get("/", function (request, resposne) { 
    resposne.sendFile(__dirname + "/profilepage.html");
});

app.post("/login", function(request, response){
    let username = request.body.username;
    let password = request.body.password;
    for(let i=0; i<users.length; i++){
        if(users[i].username == username && users[i].password == password){
            response.redirect("/");
        }
    }
    response.send("Wrong Username Or Password. Please Try again.");
});

app.get("/signup", function (resquest, response) { 
    response.sendFile(__dirname + "/signup.html");
});

app.post("/signup", function(request, response){
    let newuser = {
        username : request.body.username,
        password : request.body.password
    }
    users.push(newuser);
    response.redirect("/login");
});

app.get("/facebookLogin", function (request, response) { 
    response.sendFile(__dirname + "/facebooklogin.html");
});

app.post("/facebookLogin", function (request, response) { 
    let username = request.body.username;
    let password = request.body.password;
    for(let i=0; i<facebookUsers.length; i++){
        if(facebookUsers[i].username == username && facebookUsers[i].password == password){
            response.redirect("/");
        }
    }
    response.redirect("/login")
   // response.send("Wrong Username Or Password. Please Try again.");
    
});

app.listen("5500", function(){
    console.log("Server is running at port 5500");
});