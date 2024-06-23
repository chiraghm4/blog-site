const jwt = require("jsonwebtoken");
const USER = require("../../models/users");

// create token

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// user login
const userLogin = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await USER.login({username, email, password})

    //create token
    const token = createToken(user._id);

    res.status(200).json({user, token})

  } catch (error) {
    res.status(400).json({error: error.message})
  }

};

// user signup
const userSignup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await USER.signup({ username, email, password });

    const token = createToken(user._id);

    res.status(200).json({ user, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { userLogin, userSignup };
