// Dependencies
const express = require("express");
const cors = require("cors");
const snacksControllers = require("./controllers/snacksControllers");

// Configuration
const app = express();

// Miiddleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Snack-a-log 🫒");
});

app.use("/snacks", snacksControllers);

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// Export
module.exports = app;
