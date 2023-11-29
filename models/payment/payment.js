const { Schema, model } = require("mongoose");

const paymentSchema = new Schema({
  contestId: {
    type: String,
    required: true,
  },
  contestName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  contestDate: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userImg: {
    type: String,
  },
  transactionId: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  prize: {
    type: Number,
    required: true,
  },
  participation: {
    type: Boolean,
    required: true,
  },
});

const payment = model("payment", paymentSchema);

module.exports = payment;
