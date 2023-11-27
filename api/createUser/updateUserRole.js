const { default: mongoose } = require("mongoose");
const users = require("../../models/users/user");

const updateUserRole = async (req, res) => {
  const id = req.params?.id;
  const query = { _id: new mongoose.Types.ObjectId(id) };
  const doc = req.body;
  const update = {
    $set: {
      role: doc.role,
    },
  };
  const result = await users.findByIdAndUpdate(query, update, { new: true });
  res.send(result);
};

module.exports = updateUserRole;
