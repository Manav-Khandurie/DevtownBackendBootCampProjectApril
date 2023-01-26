"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const App = express();

App.use(bodyParser.urlencoded({ extended: true }));
App.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
App.get("/about", function (req, res) {
  res.send("THIS IS MANAV");
});

App.post("/", (req, res) => {
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var result = n1 + n2;
  res.send("THE RESULT IS :--" + result);
});

App.listen(3000, () => console.log("SERVER STARTED"));
