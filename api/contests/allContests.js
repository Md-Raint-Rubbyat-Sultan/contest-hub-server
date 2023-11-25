const contests = require("../../models/contests/contests");

const allContest = async (req, res) => {
  const result = await contests.find({});
  res.send(result);
};

module.exports = allContest;
