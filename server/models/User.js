const mongoose = require("mongoose");
module.exports.User = mongoose.model("User", {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    displayName: {
        type: String,
        trim: true
    }
});