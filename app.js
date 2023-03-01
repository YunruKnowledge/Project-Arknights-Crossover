



console.log("NEW SESSION: " + Date().toUpperCase());

const path = require('path');
const express = require('express');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");

const routes = require("./routes/router")
app.use(routes)

const port = 5000;
app.listen(port);
console.log("LISTENING AT PORT: " + port);




