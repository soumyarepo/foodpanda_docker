const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Notification Service is running");
});

app.listen(5000, () => {
  console.log("Notification Service running on port 5000");
});