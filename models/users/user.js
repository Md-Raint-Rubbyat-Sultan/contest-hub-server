const { Schema, model } = require("mongoose");

const usersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

const users = model("users", usersSchema);

module.exports = users;
