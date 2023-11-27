const { Schema, model } = require("mongoose");

const pendingSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  prize: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  participation_count: {
    type: Number,
    required: true,
  },
  contest_description: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  winner: {
    type: {
      name: String,
      img: String,
      email: String,
    },
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  host: {
    type: {
      name: String,
      email: String,
      img: String,
      role: String,
    },
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
  approved: {
    type: String,
    required: true,
  },
});

const pending = model("pending", pendingSchema);

module.exports = pending;
