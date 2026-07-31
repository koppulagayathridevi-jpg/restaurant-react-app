

const express = require("express");
const router = express.Router();

const {
  createFood,
  getAllFoods,
  getFoodById,
  updateFood,
  deleteFood,
} = require("../controllers/foodController");

// GET all foods
router.get("/", getAllFoods);

// GET single food
router.get("/:id", getFoodById);

// POST new food
router.post("/", createFood);

// UPDATE food
router.put("/:id", updateFood);

// DELETE food
router.delete("/:id", deleteFood);

module.exports = router;