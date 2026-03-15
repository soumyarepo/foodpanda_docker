const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    service: "Login Service",
    message: "User logged in successfully"
  });
});

app.listen(5000, () => {
  console.log("Login Service running on port 5000");
});