const payment = require("../../models/payment/payment");

const paymentInfo = async (req, res) => {
  try {
    const info = req.body;
    const result = await payment.create(info);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = paymentInfo;
