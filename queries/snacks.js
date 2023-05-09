const db = require("../db/dbConfig.js");

// All Snacks
const getAllSnacks = async () => {
  try {
    const allSnacks = await db.any("SELECT * FROM snacks");
    return allSnacks;
  } catch (error) {
    return { error: error };
  }
};

// One Snack
const oneSnack = async (id) => {
  try {
    // id name MUST match what the id is labelled in the database chart, for us it is snack_id NOT jut id
    const snack = await db.oneOrNone("SELECT * FROM snacks WHERE snack_id=$1", id);
    return snack;
  } catch (error) {
    return { error: error };
  }
};

module.exports = {
  getAllSnacks,
  oneSnack,
};
