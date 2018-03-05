const express = require("express");
const router = express.Router();
const Blogs = require("../Models/Blogs");
// router.get("index");

// router.get("/", (req, res) => {
//   blogs.find({}).then(blogs => {
//     res.render("index", { blogs });
//   });
// });

// router.get("/new", (req, res) => {
//   res.send("BOO BOO BOO");
// });

module.exports = router;
