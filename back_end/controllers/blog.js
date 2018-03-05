const express = require("express");
const router = express.Router();
const Blogs = require("../Models/Blogs");
router.get("/blogs/new");

router.get("/new", (req, res) => {
  res.render("blogs/new");
});

router.get("/new", (req, res) => {
  res.send("BOO BOO BOO");
});

module.exports = router;
