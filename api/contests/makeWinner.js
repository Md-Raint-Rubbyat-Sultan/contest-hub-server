const { default: mongoose } = require("mongoose");
const contests = require("../../models/contests/contests");

const makeWinner = async (req, res) => {
  const id = req.params?.id;
  const query = { _id: new mongoose.Types.ObjectId(id) };
  const winner = req.body;
  const update = {
    $set: {
      "winner.name": winner?.winnerName,
      "winner.email": winner?.winnerEmail,
      "winner.img": winner?.winnerImg,
    },
  };

  const result = await contests.findByIdAndUpdate(query, update, { new: true });
  res.send(result);
};

module.exports = makeWinner;
