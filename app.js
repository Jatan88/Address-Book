const express = require("express");
require("dotenv").config();
const app = express();
const cookieParser = require("cookie-parser");

//cookies middleware
app.use(cookieParser());


//regular middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//export app.js
module.exports = app;