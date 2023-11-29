const payment = require("../../models/payment/payment");

const singlePaymentInfoById = async (req, res) => {
  const id = req.params?.id;
  const query = { contestId: id, participation: true };
  const result = await payment.find(query);
  res.send(result);
};

module.exports = singlePaymentInfoById;
