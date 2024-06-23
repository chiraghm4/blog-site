const jwt = require("jsonwebtoken");
const USER = require("../models/users");

const requireAuth = async (req, res, next) => {
  // verify authentication

  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ error: "Auth token required" });

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await USER.findOne({ _id }).select("_id");

    next();
  } catch (err) {
    console.log(err)
    res.status(401).json({error: "request is not authorized"})
  }
};

module.exports = requireAuth
