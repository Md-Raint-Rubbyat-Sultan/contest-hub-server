const { default: mongoose } = require("mongoose");
const contests = require("../../models/contests/contests");

const deleteContest = async (req, res) => {
  const id = req.params?.id;
  const query = { _id: new mongoose.Types.ObjectId(id) };
  const result = await contests.deleteOne(query);
  res.send(result);
};

module.exports = deleteContest;
