const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Login Service is running");
});

app.listen(5000, () => {
  console.log("Login Service running on port 5000");
});