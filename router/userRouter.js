const express = require("express");
const userRouter = express.Router();
const {
  renderLoginPage,
  renderSigninPage,
  handleSigninData,
  authLoginData,
  handleLogoutUser,
} = require("../controller/userController");

userRouter.get("/login", renderLoginPage);
userRouter.post("/login", authLoginData);
userRouter.get("/signin", renderSigninPage);
userRouter.post("/signin", handleSigninData);

userRouter.get("/logout", handleLogoutUser);

module.exports = { userRouter };
