const express = require("express");
const app = express();

app.get("/notify", (req, res) => {
  res.json({
    service: "Notification Service",
    message: "Notification sent successfully"
  });
});

app.listen(5000, () => {
  console.log("Notification Service running on port 5000");
});