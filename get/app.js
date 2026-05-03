const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Ali Khan",
      email: "ali.khan@example.com",
      age: 22,
      city: "Karachi",
      isActive: true,
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      name: "Ahmed Raza",
      email: "ahmed.raza@example.com",
      age: 24,
      city: "Lahore",
      isActive: false,
      skills: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 3,
      name: "Fatima Noor",
      email: "fatima.noor@example.com",
      age: 21,
      city: "Islamabad",
      isActive: true,
      skills: ["Bootstrap", "Tailwind", "Next.js"],
    },
    {
      id: 4,
      name: "Hassan Ahmed",
      email: "hassan.ahmed@example.com",
      age: 26,
      city: "Multan",
      isActive: true,
      skills: ["Express", "PostgreSQL"],
    },
    {
      id: 5,
      name: "Ayesha Malik",
      email: "ayesha.malik@example.com",
      age: 23,
      city: "Faisalabad",
      isActive: false,
      skills: ["Vue.js", "Firebase"],
    },
  ]);
});
app.listen(5000, () => {
  console.log("server chal gaya");
});
