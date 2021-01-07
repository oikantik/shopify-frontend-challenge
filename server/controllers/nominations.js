const nominationServices = require("../services/nominations");

module.exports = {
  read: async (req, res) => {
    try {
      const data = await nominationServices.read({ id: req.params.id });
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ error: "something bad happened" });
    }
  },
  write: async (req, res) => {
    try {
      console.log(req.body);
      const data = await nominationServices.write(req.body);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "something bad happened" });
    }
  },
  update: async (req, res) => {
    try {
      console.log(req.body.id);
      const data = await nominationServices.update({
        nominations: req.body.nominations,
        id: req.body.id,
      });
      console.log(data);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ error: "something bad happened" });
    }
  },
};
