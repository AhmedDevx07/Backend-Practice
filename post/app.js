// const express = require("express");
// const app = express();
// app.post("/signup", (req, res) => {
//   res.json({
//     status: "ture",
//     message: "User Signup ho gaya",
//   });
// });
// app.listen(5000, () => {
//   console.log("server chal gaya");
// });


const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.post("/signup", (req, res) => {
  res.json({
    status: "ture",
    message: "User Signup ho gaya",
  });
});
app.listen(5000, () => {
  console.log("server chal gaya");
});
