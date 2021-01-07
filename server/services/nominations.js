const fs = require("fs");
const path = require("path");
const Nomination = require("../models/Nomination");

module.exports = {
  read: async ({ id }) => {
    const data = await Nomination.findById({ _id: id });
    return data;
  },
  write: async ({ nominations }) => {
    const nomination = new Nomination({
      ...nominations,
    });
    const data = await nomination.save();
    return data;
  },
  update: async ({ nominations, id }) => {
    const data = await Nomination.findByIdAndUpdate(
      { _id: id },
      { nominations },
      { new: true }
    );
    return data;
  },
};
