const Nomination = require("../models/Nomination");

module.exports = {
  read: async ({ id }) => {
    const data = await Nomination.findById({ _id: id });
    return data;
  },
  write: async (nominations) => {
    console.log(nominations);
    const nomination = new Nomination({
      ...nominations,
    });
    const data = await nomination.save();
    console.log(data);
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
