const payment = require("../../models/payment/payment");

const userPaymentInfo = async (req, res) => {
  const email = req.query?.email;
  const sort = req.query?.sort;
  const query = { userEmail: email };
  const result = await payment
    .find(query)
    .sort({ contestDate: sort === "acc" ? -1 : 1 });
  res.send(result);
};

module.exports = userPaymentInfo;
