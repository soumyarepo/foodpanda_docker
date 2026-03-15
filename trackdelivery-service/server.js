const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Track Delivery Service is running");
});

app.listen(5000, () => {
  console.log("Track Delivery Service running on port 5000");
});