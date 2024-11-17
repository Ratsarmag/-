const express = require("express");
const app = express();
const port = 3000;
const connection = require("./db");

app.use(express.json());

app.get("/data", (req, res) => {
  connection.query("SELECT * FROM Car", (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
