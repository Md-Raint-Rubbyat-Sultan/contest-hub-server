const contests = require("../../models/contests/contests");

const fullContests = async (req, res) => {
  const result = await contests.find({});
  res.send(result);
};

module.exports = fullContests;
