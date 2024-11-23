const express = require("express");
const userRouter = express.Router();
const {
  renderLoginPage,
  renderSigninPage,
} = require("../controller/userController");

userRouter.get("/login", renderLoginPage);
userRouter.get("/signin", renderSigninPage);

module.exports = { userRouter };
