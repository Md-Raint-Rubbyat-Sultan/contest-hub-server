const { default: mongoose } = require("mongoose");
const contests = require("../../models/contests/contests");

const singleContest = async (req, res) => {
  const id = req.params?.id;
  const query = new mongoose.Types.ObjectId(id);
  const result = await contests.findById(query);
  res.send(result);
};

module.exports = singleContest;
