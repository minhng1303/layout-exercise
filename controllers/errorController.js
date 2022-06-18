"use strict";
const express = require("express");
const errorRouter = express.Router();

errorRouter.get("*", (req, res) => {
  res.render("error");
});

module.exports = { errorRouter };
