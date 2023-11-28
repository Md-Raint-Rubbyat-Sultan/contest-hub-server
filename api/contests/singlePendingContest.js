const { default: mongoose } = require("mongoose");
const pending = require("../../models/pendingContest/pending");

const singlePendingContest = async (req, res) => {
  const id = req.params?.id;
  const query = new mongoose.Types.ObjectId(id);
  const result = await pending.findById(query);
  res.send(result);
};

module.exports = singlePendingContest;
