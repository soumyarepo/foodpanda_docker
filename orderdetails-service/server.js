const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", async (req, res) => {
  try {
    const notificationResponse = await axios.get("http://notification-service:5000/notify");

    res.json({
      service: "Order Details Service",
      order: "Order placed successfully",
      item: "Chicken Biryani",
      notification: notificationResponse.data.message
    });
  } catch (error) {
    res.json({
      service: "Order Details Service",
      order: "Order placed successfully",
      item: "Chicken Biryani",
      notification: "Notification service is unavailable, but order still works"
    });
  }
});

app.listen(5000, () => {
  console.log("Order Details Service running on port 5000");
});