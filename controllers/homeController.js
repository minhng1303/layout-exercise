const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/courses", (req, res) => {
  res.render("courses");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/error", (req, res) => {
  res.render("error");
});

router.post("/thanks", (req, res) => {
  res.render("thanks");
});

module.exports = { router };
