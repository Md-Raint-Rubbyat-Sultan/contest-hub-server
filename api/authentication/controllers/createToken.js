const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = (req, res, next) => {
  try {
    const userInfo = req.body;

    const token = jwt.sign(userInfo, process.env.ACCESS_TOKEN, {
      expiresIn: "365d",
    });

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send({ message: true });
  } catch (error) {
    next(error);
  }
};

module.exports = createToken;
