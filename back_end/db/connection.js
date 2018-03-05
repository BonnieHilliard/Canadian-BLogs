const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/torontoblogs");

mongoose.Promise = Promise;
module.exports = mongoose;
