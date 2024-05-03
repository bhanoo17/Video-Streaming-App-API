const { User } = require("../models/user");
const express = require("express");
const mongoose = require("mongoose");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const Joi = require("joi");

const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid Email or password");

  const isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) return res.status(400).send("Invalid email or Password");

  res.send(true);
});

function validate(user) {
  const schema = {
    email: Joi.string().min(5).max(255).required().unique().email(),
    password: Joi.string().min(5).required(),
  };

  return Joi.validate(user, schema);
}

module.exports.router = router;
