const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    service: "Track Delivery Service",
    status: "Order is on the way"
  });
});

app.listen(5000, () => {
  console.log("Track Delivery Service running on port 5000");
});