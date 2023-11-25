const users = require("../models/users/user");

const verifyAdmin = async (req, res, next) => {
  const token = req.user?.email;
  const query = { email: token };
  const isUserExist = await users.findOne(query);
  const isAdmin = isUserExist?.role === "admin";
  if (!isAdmin) {
    return res.status(403).send({ message: "forbidden access" });
  }
  next();
};

module.exports = verifyAdmin;
