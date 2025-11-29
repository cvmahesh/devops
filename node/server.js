const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const path = require("path");


app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


// Simple API endpoint
app.get("/api/message", (req, res) => {
  console.log(`GET request received at /api/message`);
  res.json({ message: "Hello from Node.js backend!" });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
