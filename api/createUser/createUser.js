const users = require("../../models/users/user");

const createUser = async (req, res) => {
  const user = req.body;
  const userEmail = user.email;
  const isExist = await users.findOne({ email: userEmail });
  if (isExist) {
    return res.send(isExist);
  }
  const result = await users.create(user);
  res.send(result);
};

module.exports = createUser;
