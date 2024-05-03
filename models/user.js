const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    minlength: 100,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    minlength: 255,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = {
    name: Joi.string().min(5).max(100).required(),
    email: Joi.string().min(5).max(255).required().unique().email(),
    name: Joi.string().min(5).required(),
  };

  return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
