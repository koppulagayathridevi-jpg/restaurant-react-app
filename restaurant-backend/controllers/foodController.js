const Food = require("../models/Food");

const createFood = async (req, res) => {
  try {
    const { name, description, category, price, image, available } = req.body;

    // Validation
    if (!name || !description || !category || !price || !image) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Create Food
    const food = await Food.create({
      name,
      description,
      category,
      price,
      image,
      available,
    });

    

    // Success Response
    return res.status(201).json({
      success: true,
      message: "Food added successfully",
      data: food,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
// Get All Foods
const getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find();

    res.status(200).json({
      success: true,
      count: foods.length,
      data: foods,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
// Get Food By ID
const getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food not found",
      });
    }

    res.status(200).json({
      success: true,
      data: food,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
// Update Food
const updateFood = async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Food updated successfully",
      data: food,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
// Delete Food
const deleteFood = async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id);

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Food deleted successfully",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createFood,
  getAllFoods,
  getFoodById,
  updateFood,
  deleteFood
};