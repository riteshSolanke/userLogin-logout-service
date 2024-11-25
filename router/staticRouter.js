const express = require("express");
const staticRouter = express.Router();

const { renderHomePage } = require("../controller/staticController");

staticRouter.get("/", renderHomePage);

module.exports = { staticRouter };
