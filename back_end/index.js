const express = require("express");
const hbs = require("hbs");
const Blogs = require("./Models/Blogs");
const blogsControllers = require("./controllers/blog");
const parser = require("body-parser");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
//app.use(express.static("public"));

//app.use("/static", express.static("public"));
//app.use(express.static("public"));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  Blogs.find({}).then(blogs => res.render("index", { blogs }));
});

app.get("/blogs/new", (req, res) => {
  Blogs.find({}).then(blogs => res.render("./blogs/new", { blogs }));
});

app.use("/blogs", blogsControllers);

app.listen(3000, () => console.log("we are in business"));
