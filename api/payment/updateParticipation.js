const { default: mongoose } = require("mongoose");
const payment = require("../../models/payment/payment");

const updateParticipation = async (req, res) => {
  const id = req.params?.id;

  const update = {
    $set: {
      participation: true,
    },
  };
  const result = await payment.findByIdAndUpdate(
    { _id: new mongoose.Types.ObjectId(id) },
    update,
    { new: true }
  );

  res.send(result);
};

module.exports = updateParticipation;
