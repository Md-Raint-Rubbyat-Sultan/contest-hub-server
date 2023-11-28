const { default: mongoose } = require("mongoose");
const pending = require("../../models/pendingContest/pending");
const contests = require("../../models/contests/contests");

const approveContest = async (req, res) => {
  const id = req.params?.id;
  const query = { _id: new mongoose.Types.ObjectId(id) };
  const update = req.body;
  const updatedDoc = {
    $set: {
      approved: update.approve,
    },
  };
  const result = await pending.findByIdAndUpdate(query, updatedDoc, {
    new: true,
  });

  const objectResult = result.toObject();

  const { _id, ...rest } = objectResult;

  const addToContestModel = await contests.create(rest);

  let deleteFromPending = {};

  if (addToContestModel) {
    deleteFromPending = await pending.deleteOne(query);
  }

  res.send(deleteFromPending);
};

module.exports = approveContest;
