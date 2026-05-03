const express = require("express");
const app = express();
app.put("/signup", (req, res) => {
  res.json({
    status: "ture",
    message: "User update ho gaya",
  });
});
app.listen(5000, () => {
  console.log("server chal gaya");
});
