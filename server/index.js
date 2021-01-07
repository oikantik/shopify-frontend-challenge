const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./database");
dotenv.config({ silent: true });
const PORT = process.env.PORT || process.env.API_PORT;
const nominationRoutes = require("./routers/nominations");
app.use(cors());

db();
app.use(express.json());

app.use("/", nominationRoutes);

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
