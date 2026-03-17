const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome</h1>
    <p>Name: Anirudh S</p>
    <p>Roll No: 2023BCS0019</p>
  `);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});