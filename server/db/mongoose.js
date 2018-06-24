const mongoose = require("mongoose");

mongoose.Promise = global.Promise; // Use promises in mongoose
mongoose.connect("mongodb://localhost:27017/TodoApp");

module.exports = {
    mongoose
}