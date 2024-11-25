const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const PORT = 9000;

// importing data....
const { userRouter } = require("./router/userRouter");
const { staticRouter } = require("./router/staticRouter");

// setting
app.set("view engine", "ejs");
app.set("views", "./views");

//middlewares......
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/", staticRouter);
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`server is running at port number ${PORT}`));
