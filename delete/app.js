const express = require("express");
const app = express();
app.delete("/signup", (req, res) => {
  res.json({
    status: "ture",
    message: "User delete ho gaya",
  });
});
app.listen(5000, () => {
  console.log("server chal gaya");
});
