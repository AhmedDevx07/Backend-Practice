const express = require("express");
const app = express();
app.use(express.json());
app.post("/signup", (req, res) => {
  const { name, title, skills } = req.body;
  console.log(name);
  console.log(title);
  console.log(skills);
  res.json({
    status: "ture",
    message: "apka data mil gaya",
  });
});
app.listen(5000, () => {
  console.log("server chal gaya");
});
