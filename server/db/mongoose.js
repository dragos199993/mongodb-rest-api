const mongoose = require("mongoose");

mongoose.Promise = global.Promise; // Use promises in mongoose
mongoose.connect(process.env.MONGODB_URI || process.env.DB_URI);

module.exports = {
    mongoose
}