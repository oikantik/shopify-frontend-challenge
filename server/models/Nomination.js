const mongoose = require("mongoose");

const Nomination = new mongoose.Schema({
  nominations: [],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("nomination", Nomination);
