const users = require("../../models/users/user");

const getAllUsers = async (_req, res) => {
  const result = await users.find({});
  res.send(result);
};

module.exports = getAllUsers;
