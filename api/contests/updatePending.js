const { default: mongoose } = require("mongoose");
const pending = require("../../models/pendingContest/pending");

const updatePending = async (req, res) => {
  const id = req.params?.id;
  const doc = req.body?.contestInfo;
  const result = await pending.findByIdAndUpdate(
    { _id: new mongoose.Types.ObjectId(id) },
    doc,
    { new: true }
  );
  res.send(result);
};

module.exports = updatePending;
