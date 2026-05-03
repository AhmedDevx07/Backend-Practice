const express = require("express");
const app = express();
app.use(express.json());
const users = [];
app.get("/users", (req, res) => {
  res.json({
    status: "ture",
    message: "All user data",
    data: users,
  });
});
app.post("/users", (req, res) => {
  const data = req.body;
  users.push(data);
  console.log(data);
  res.json({
    status: "ture",
    message: "user add ho gaya",
  });
});
app.listen(5000, () => {
  console.log("server chal gaya");
});
