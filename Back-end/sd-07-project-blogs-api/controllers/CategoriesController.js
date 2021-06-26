const CategoriesService = require('../services/CategoriesService');

const createCategory = async (req, res) => {
  try {
    const data = req.body;
    const result = await CategoriesService.createCategory(data);
    if (result.message) {
      return res.status(result.code).json({ message: result.message });
    }
    return res.status(201).json(result); 
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getAllCategories = async (req, res) => {
  try {
    const result = await CategoriesService.getAllCategories();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};