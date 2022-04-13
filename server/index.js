const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

const PORT = 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const router = require("./src/routes");

app.use("/api/v1/", router);

app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));
