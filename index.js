const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 9000;

// importing data....

app.set("view engin", "ejs");




//middlewares......
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => console.log(`server is running at port number ${PORT}`));
