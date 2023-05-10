// Dependecies
const express = require("express");
const snacks = express.Router();
const {
  getAllSnacks,
  getOneSnack,
  createOneSanck,
  updateOneSnack,
  delteOneSnack,
} = require("../queries/snacks.js");

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
  const snack = await getOneSnack(id);
  if (snack) {
    res.status(200).json(snack);
  } else {
    res.status(404).json({ error: "Invalid ID" });
  }
});

// CREATE one snack
// /snacks
snacks.post("/", async (req, res) => {
  const snack = await createOneSanck(req.body);
  if (snack) {
    res.status(200).json(snack);
  } else {
    res.status(404).json({ error: "Invalid ID" });
  }
});

// UPDATE one snack
// /snacks/:id
snacks.put("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await updateOneSnack(id, req.body);
  if (snack) {
    res.status(200).json(snack);
  } else {
    res.status(404).json({ error: "Invalid ID" });
  }
});

// DELETE one snack
// /snacks/:id
snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleted = await delteOneSnack(id, req.body);
  if (deleted) {
    res.status(200).json(deleted);
  } else {
    res.status(404).json({ error: "Invalid ID" });
  }
});

module.exports = snacks;
