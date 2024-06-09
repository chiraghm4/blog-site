const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require('validator')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.statics.signup = async function ({username, email, password}) {

  // validation

  if (!email || !username || !password) throw Error('all the fields must be filled')

  if(!validator.isEmail(email)) throw Error('email is not valid')

  if(!validator.isStrongPassword(password)) throw Error('password is not strong')


  const exists = await this.findOne({ email });
  if (exists) throw Error('email already in use')

  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ username, email, password: hash });

  return user;
};

const USER = mongoose.model("users", userSchema);

module.exports = USER
