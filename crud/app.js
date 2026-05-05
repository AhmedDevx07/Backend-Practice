const express = require("express");
const app = express();
app.use(express.json());
let users = [];
// all users
app.get("/users", (req, res) => {
  res.json({
    status: "ture",
    message: "All user data",
    data: users,
  });
});
// single user
app.get("/users/:username", (req, res) => {
  const { username } = req.params;
  res.json({
    status: "ture",
    message: "single user data",
    data: users.filter((user) => user.username == username),
  });
});
// update user
app.put("/users/:username", (req, res) => {
  const { username } = req.params;
  users = users.map((user) => {
    if (user.username == username) {
      user = req.body;
      return user;
    }
    return user;
  });
  res.json({
    status: "ture",
    message: "update user data",
  });
});
// delete user
app.delete("/users/:username", (req, res) => {
  const { username } = req.params;
  users = users.filter((user) => {
    return user.username != username;
  });
  res.json({
    status: "ture",
    message: "delete user data",
  });
});
// add user
app.post("/users", (req, res) => {
  const data = req.body;
  users.push(data);

  res.json({
    status: "ture",
    message: "user add ho gaya",
  });
});
app.listen(5000, () => {
  console.log("server chal gaya");
});
