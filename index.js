const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const ejs = require("ejs");
const PORT = 9000;
// mongoose connection
mongoose
  .connect("mongodb://127.0.0.1:27017/login-logout-userDB")
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
    secret: "your-secret",
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

app.listen(PORT, () => console.log(`server is running at port number ${PORT}`));
