async function renderLoginPage(req, res) {
  res.render("login");
}

async function renderSigninPage(req, res) {
  res.render("signin");
}



module.exports = { renderLoginPage, renderSigninPage };
