const contests = require("../../models/contests/contests");

const bestCreator = async (req, res) => {
  const result = await contests.aggregate([
    {
      $group: {
        _id: {
          hostEmail: "$host.email",
          contestName: "$name",
        },
        totalParticipants: { $sum: "$participation_count" },
        contest: { $push: "$$ROOT" },
      },
    },
    {
      $sort: {
        "_id.hostEmail": 1,
        totalParticipants: -1,
      },
    },
    // get the best contest of a individual hosts
    {
      $group: {
        _id: "$_id.hostEmail",
        bestCreatorName: { $first: "$contest" },
        totalParticipants: { $first: "$totalParticipants" },
      },
    },
    // sort the data to find the best among all host
    {
      $sort: {
        totalParticipants: -1,
      },
    },
    // get the first 5 contest creators contest
    {
      $limit: 5,
    },
    {
      $unwind: "$bestCreatorName",
    },
    // it will replace the document with best contest and the other field generated with the pipeline will vanished.
    {
      $replaceRoot: { newRoot: "$bestCreatorName" },
    },
  ]);
  res.send(result);
};

module.exports = bestCreator;
