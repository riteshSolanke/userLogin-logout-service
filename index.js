require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const ejs = require("ejs");

// Access environment variables
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI;
const sessionSecret = process.env.SESSION_SECRET;

// mongoose connection
mongoose
  .connect(mongoUri)
  .then(() => console.log(`mongoose connected succesfully`))
  .catch((err) => console.log(`error during mongoose connection ${err}`));

// importing data....
const { userRouter } = require("./router/userRouter");
const { staticRouter } = require("./router/staticRouter");

// ejs setting
app.set("view engine", "ejs");
app.set("views", "./views");

// session middleware

app.use(
  session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

//middlewares......
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/", staticRouter);
app.use("/user", userRouter);

app.listen(port, () => console.log(`server is running at port number ${port}`));
