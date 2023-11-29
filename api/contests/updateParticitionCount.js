const { default: mongoose } = require("mongoose");
const contests = require("../../models/contests/contests");

const updateParticipationCount = async (req, res) => {
  const id = req.params?.id;
  const query = { _id: new mongoose.Types.ObjectId(id) };
  const doc = req.body;
  const update = {
    $set: {
      participation_count: doc.count,
    },
  };
  const result = await contests.findByIdAndUpdate(query, update, { new: true });
  res.send(result);
};

module.exports = updateParticipationCount;
