const payment = require("../../models/payment/payment");
const contests = require("../../models/contests/contests");

const userStatus = async (req, res) => {
  const { email } = req.query;

  const registered = await payment.find({ userEmail: email });
  const win = await contests.find({ "winner.email": email });

  res.send({ win, registered });
};

module.exports = userStatus;
