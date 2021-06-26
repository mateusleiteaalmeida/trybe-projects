const { Category } = require('../models');
const { validateCategoryData } = require('./validations/CategoriesValidations.js');

const createCategory = async (data) => {
  const { error } = validateCategoryData(data);
  if (error) return { message: error.details[0].message, code: 400 };
  return Category.create(data);
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  createCategory,
  getAllCategories,
};