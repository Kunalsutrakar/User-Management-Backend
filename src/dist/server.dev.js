"use strict";

var express = require("express");

var mongoose = require("mongoose");

var route = require("./routes/route");

var app = express(); //creating server
//first create an instance of express

app.use(express.json()); //middleware

app.use("/", route); //middleware
//DB connection

mongoose.connect("mongodb+srv://kunalsutrakar:NgMNQxtJCmkMM7VR@cluster0.ugstv8q.mongodb.net/").then(function () {
  return console.log("Database connected");
})["catch"](function () {
  return console.log("Database is not connected");
});
app.get("/", function (req, res) {
  res.send("Hello from new server");
});
var port = 4000;
app.listen(port, function (err) {
  if (err) console.log(err);else console.log("Server is running at ".concat(port));
});