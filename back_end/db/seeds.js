const Blogs = require("../Models/Blogs");

Blogs.remove({}).then(() => {
  Promise.all([
    Blogs.create({
      title: "Where to get good eats in Toronto",
      blogContent: "Go down to the Local Tavern in Liberty village"
    }),
    Blogs.create({
      title: "Things to do this Saturday",
      blogContent:
        "Head down to Maple Leaf square to go skating and grab a hot coffee"
    })
  ]).then(() => {
    console.log("done");
    process.exit();
  });
});
