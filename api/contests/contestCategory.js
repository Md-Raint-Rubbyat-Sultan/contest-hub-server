const contests = require("../../models/contests/contests");

const contestCategories = async (req, res) => {
  const result = await contests.distinct("category");
  res.send(result);
};

module.exports = contestCategories;
