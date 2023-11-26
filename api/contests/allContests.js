const contests = require("../../models/contests/contests");

const allContest = async (req, res) => {
  const category = req.query?.category;
  const page = req.query?.page;
  // console.log(category);
  const result = await contests
    .find({ category: category })
    .skip(page * 10)
    .limit(10);
  res.send({ data: result, count: result.length });
};

module.exports = allContest;
