const express = require("express");
const hbs = require("hbs");
const Blogs = require("./Models/Blogs");
const blogsControllers = require("./controllers/blog");
const parser = require("body-parser");
const app = express();

app.use(express.static("public"));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  Blogs.find({}).then(blogs => res.render("index", { blogs }));
});

app.use("/blogs", blogsControllers);

app.listen(3000, () => console.log("we are in business"));
