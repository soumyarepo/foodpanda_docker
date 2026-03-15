const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    service: "Food Menu Service",
    menu: [
      "Chicken Biryani",
      "Pizza Combo",
      "Burger Meal",
      "Fried Rice"
    ]
  });
});

app.listen(5000, () => {
  console.log("Food Menu Service running on port 5000");
});