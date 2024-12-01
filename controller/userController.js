const { User } = require("../models/userModel");
const bcrypt = require("bcrypt");
const session = require("express-session");

async function renderLoginPage(req, res) {
  res.render("login");
}

async function authLoginData(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user)
      return res.render("login", {
        sms: "Incorrect username or password",
      });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.render("login", { sms: "Invalide password!" });
    }

    req.session.userId = user._id;
    req.session.isAuthenticated = true;
    req.session.email = user.email;
    res.locals.user = user;
    return res.render("home", { sms: "congratulations are you loged in..." });
  } catch (err) {
    console.log(err);
  }
}

async function renderSigninPage(req, res) {
  res.render("signin");
}

async function handleSigninData(req, res) {
  const { email, username, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user)
      return res.render("login", {
        sms: "You have already an account, pls login",
      });

    const newUser = await User.create({
      email,
      username,
      password,
    });
    res.locals.user = newUser;
    return res.render("home", {
      sms: "Congratulation! You had succesfully signed up...",
    });
  } catch (err) {
    console.log(err);
  }
}

async function handleLogoutUser(req, res) {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Could not log out");
    }
    res.clearCookie("connect.sid");
    res.render("home", {
      sms: "Congratulation! You are successfully Log-out..",
    });
  });
}

module.exports = {
  renderLoginPage,
  renderSigninPage,
  handleSigninData,
  authLoginData,
  handleLogoutUser,
};
