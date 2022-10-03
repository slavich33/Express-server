
const express = require("express");

const app = express();

const port = 3000;

app.get("/", function(req, res){
  res.send("<h1>hello</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at @");
});

app.get("/about", function(req, res){
  res.send("This is just Slava CHu");
});

app.get("/hobbies", function(req, res){
  res.send("Coffe code");
});

app.listen(port, function() {
  console.log("Server started at port 3000");
});
