const pending = require("../../models/pendingContest/pending");

const addAContest = async (req, res) => {
  const contestInfo = req.body;
  const result = await pending.create(contestInfo);
  res.send(result);
};

module.exports = addAContest;
