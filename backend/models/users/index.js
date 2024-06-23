const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// static signup function

userSchema.statics.signup = async function ({ username, email, password }) {
  // validation

  if (!email || !username || !password)
    throw Error("all the fields must be filled");

  if (!validator.isEmail(email)) throw Error("email is not valid");

  if (!validator.isStrongPassword(password))
    throw Error("password is not strong");

  const exists = await this.findOne({ email }) || await this.findOne({username});
  if (exists) throw Error("email/username already in use");

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ username, email, password: hash });

  return user;
};

// static login function

userSchema.statics.login = async function ({ username, email, password }) {
  if (!(email || username) || !password)
    throw Error("all field must be filled");

  const user = await USER.findOne({ email }) || await USER.findOne({username});

  if (!user) throw Error("incorrect email/username");

  const match = await bcrypt.compare(password, user.password);

  if (!match) throw Error("incorrect password");

  return user;
};

const USER = mongoose.model("users", userSchema);

module.exports = USER;
