const express = require("express");
const router = express.Router();
const nominationControllers = require("../controllers/nominations");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome",
  });
});
router.get("/:id", nominationControllers.read);
router.post("/", nominationControllers.write);
router.put("/", nominationControllers.update);

module.exports = router;
