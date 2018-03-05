const mongoose = require("../db/connection");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  blogContent: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
});

const Blogs = mongoose.model("Blog", BlogSchema);

module.exports = Blogs;
