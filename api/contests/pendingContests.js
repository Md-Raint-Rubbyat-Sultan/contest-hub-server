const pending = require("../../models/pendingContest/pending");

const pendingContests = async (req, res) => {
  const host = req.query?.email;

  if (host !== req.user?.email) {
    return res.status(403).send({ message: "forbidden access" });
  }

  const query = { "host.email": host };
  const result = await pending.find(query);
  res.send(result);
};

module.exports = pendingContests;
