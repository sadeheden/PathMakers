const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Route for the homepage
app.get("/", (req, res) => {
  res.send("Server is running successfully!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
