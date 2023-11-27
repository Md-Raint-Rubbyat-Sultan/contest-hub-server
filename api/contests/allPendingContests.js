const pending = require("../../models/pendingContest/pending");

const allPendingContests = async (req, res) => {
  const result = await pending.find({});
  res.send(result);
};

module.exports = allPendingContests;
