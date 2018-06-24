const mongoose = require("mongoose");

mongoose.Promise = global.Promise; // Use promises in mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/TodoApp");

module.exports = {
    mongoose
}