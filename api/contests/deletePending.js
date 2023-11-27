const { default: mongoose } = require("mongoose");
const pending = require("../../models/pendingContest/pending");

const deletePending = async (req, res) => {
  const id = req.params?.id;
  const query = { _id: new mongoose.Types.ObjectId(id) };
  const result = await pending.deleteOne(query);
  res.send(result);
};

module.exports = deletePending;
