const express = require("express");
const app = express();

require("dotenv");

const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const router = require("./src/routes");

app.use("/api/v1/", router);

app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));
