const payment = require("../../models/payment/payment");

const singlePaymentInfo = async (req, res) => {
  const email = req.query?.email;
  const id = req.query?.id;

  const query = { userEmail: email, contestId: id };
  const result = await payment.findOne(query);

  res.send(result);
};

module.exports = singlePaymentInfo;
