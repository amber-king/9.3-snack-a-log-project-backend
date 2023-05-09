// Dependecies
const express = require("express");
const snacks = express.Router();
const { getAllSnacks, oneSnack } = require("../queries/snacks.js");

// GET All Snacks
// /snacks
snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  if (allSnacks[0]) {
    res.status(200).json(allSnacks);
  } else {
    res.status(500).json({ error: "server errors" });
  }
});

// SHOW one snack
// /snacks/:id
snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await oneSnack(id);
  if (snack) {
    res.status(200).json(snack);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

module.exports = snacks;
