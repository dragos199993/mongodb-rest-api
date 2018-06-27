const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const bcrypt = require("bcryptjs");
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: `{VALUE} is not a valid email`
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 4
  },
  tokens: [
    {
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
    }
  ]
});

UserSchema.methods.generateAuthToken = function() {
  var user = this;
  var access = "auth";
  var token = jwt
    .sign({ _id: user._id.toHexString(), access }, "changethistosecretvalue")
    .toString();
  user.tokens.push({ access, token });
  return user.save().then(() => {
    return token;
  });
};

UserSchema.methods.toJSON = function() {
  var user = this;
  var userObject = user.toObject();
  return _.pick(userObject, ["_id", "email"]);
};

UserSchema.statics.findByCredentials = function(email, password) {
  var user = this;
  return user.findOne({ email }).then(user => {
    if (!user) return Promise.reject();
    return new Promise((resolved, reject) => {
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) resolved(user);
        else reject();
      });
    });
  });
};

UserSchema.statics.findByToken = function(token) {
  let User = this;
  let decoded;
  try {
    decoded = jwt.verify(token, "changethistosecretvalue");
  } catch (e) {
    return Promise.reject();
  }
  return User.findOne({
    _id: decoded._id,
    "tokens.token": token,
    "tokens.access": "auth"
  });
};

UserSchema.methods.removeToken = function(token) {
  let User = this;
  return User.update({
    $pull: {
      tokens: { token }
    }
  });
};

UserSchema.pre("save", function(next) {
  let User = this;
  if (User.isModified("password")) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(User.password, salt, (err, hash) => {
        User.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});
const User = mongoose.model("User", UserSchema);

module.exports = {
  User
};
