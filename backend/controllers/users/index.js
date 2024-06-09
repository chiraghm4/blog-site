// login user

// const users = require("../../models/users");
const USER = require("../../models/users");

const userLogin = async (req, res) => {
  const { username, email, password } = req.body;
};

const userSignup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await USER.signup({ username, email, password });
    res.status(200).json({ user: user });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

module.exports = { userLogin, userSignup };
