const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Food Menu Service is running");
});

app.listen(5000, () => {
  console.log("Food Menu Service running on port 5000");
});