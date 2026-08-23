const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const courses = [];

app.get("/", (req, res) => {
  res.send("Iftiinshe API is running!");
});

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.post("/courses", (req, res) => {
  const newCourse = {
    id: Date.now(),
    ...req.body,
  };

  courses.push(newCourse);

  res.status(201).json(newCourse);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});