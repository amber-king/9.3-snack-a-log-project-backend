const db = require("../db/dbConfig.js");

// All Snacks
// /snacks
const getAllSnacks = async () => {
  try {
    const allSnacks = await db.any("SELECT * FROM snacks");
    return allSnacks;
  } catch (error) {
    return { error };
  }
};

// One Snack
// /snacks/:id
const getOneSnack = async (id) => {
  try {
    // id name MUST match what the id is labelled in the database chart, for us it is snack_id NOT jut id
    const snack = await db.oneOrNone(
      "SELECT * FROM snacks WHERE snack_id=$1",
      id
    );
    return snack;
  } catch (error) {
    return { error };
  }
};

//Create One
// /snacks/
const createOneSanck = async (newSnack) => {
  try {
    const createdSnack = await db.one(
      "INSERT INTO snacks(snack_name, time_eaten, food_group, is_healthy, calorie_count) VALUES ($1, $2, $3, $4, $5) RETURNING *;",
      [
        newSnack.snack_name,
        newSnack.time_eaten,
        newSnack.food_group,
        newSnack.is_healthy,
        newSnack.calorie_count,
      ]
    );
    return createdSnack;
  } catch (error) {
    return { error };
  }
};

//Update
// /snacks/:id
const updateOneSnack = async (id, newSnack) => {
  try {
    const updatedSnack = await db.one(
      "UPDATE snacks SET snack_name=$1, time_eaten=$2, food_group=$3, is_healthy=$4, calorie_count=$5 WHERE snack_id=$6 RETURNING *;",
      [
        newSnack.snack_name,
        newSnack.time_eaten,
        newSnack.food_group,
        newSnack.is_healthy,
        newSnack.calorie_count,
        id,
      ]
    );
    return updatedSnack;
  } catch (error) {
    return { error };
  }
};

//Delete
// /snacks/:id
const delteOneSnack = async (id) => {
  try {
    const deletedSnack = await db.one(
      "DELETE FROM snacks WHERE snack_id=$1 RETURNING *;",
      id
    );
    return deletedSnack;
  } catch (error) {
    return { error };
  }
};

module.exports = {
  getAllSnacks,
  getOneSnack,
  createOneSanck,
  updateOneSnack,
  delteOneSnack,
};
