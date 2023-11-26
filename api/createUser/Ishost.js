const users = require("../../models/users/user");

const isHost = async (req, res) => {
  const email = req.params?.email;
  const query = { email: email };
  const user = await users.findOne(query);
  let admin = false;
  if (user) {
    admin = user?.role === "host";
  }
  res.send(admin);
};
module.exports = isHost;
