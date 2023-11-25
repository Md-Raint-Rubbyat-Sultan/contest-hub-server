const contests = require("../../models/contests/contests");

const popularCount = async (req, res) => {
  const result = await contests
    .find({})
    .sort({ participation_count: -1 })
    .limit(6);
  res.send(result);
};

module.exports = popularCount;
