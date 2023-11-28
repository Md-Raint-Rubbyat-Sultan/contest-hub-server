require("dotenv").config();
const stripe = require("stripe")(process.env.PAYMENT_KEY);

const paymentSecret = async (req, res) => {
  try {
    const { price } = req.body;
    const amount = parseInt(price * 100);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    res.send(paymentIntent);
  } catch (error) {
    console.log(error);
  }
};

module.exports = paymentSecret;
