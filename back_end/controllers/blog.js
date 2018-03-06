const express = require("express");
const router = express.Router();
const Blogs = require("../Models/Blogs");

//get a new view for a new joke
router.get("/new", (req, res) => {
  res.render("blogs/index");
});

//add the get function
router.get("/new", (req, res) => {
  res.send("bonjour");
});

router.get("/new", (req, res) => {
  res.render("blogs/index");
});
//get a joke by its Id
router.get("/:id", (req, res) => {
  Blogs.findOne({ _id: req.params.id }).then(blogs => {
    res.render("/blogs/show", blogs);
    console.log("/:id");
  });
});

//create new jokes
router.post("/new", (req, res) => {
  Blogs.create(req.body).then(blogs => {
    res.redirect(`/blogs/${blogs.id}`);
  });
});

module.exports = router;
