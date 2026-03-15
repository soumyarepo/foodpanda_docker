const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Order Details Service is running");
});

app.listen(5000, () => {
  console.log("Order Details Service running on port 5000");
});