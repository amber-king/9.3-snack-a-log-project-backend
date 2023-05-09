// Dependencies
const express = require("express");
const cors = require("cors");

// Configuration
const app = express();

// Miiddleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Snack-a-log 🫒");
});

// Export
module.exports = app;
