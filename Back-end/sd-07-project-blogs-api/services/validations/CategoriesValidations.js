const Joi = require('joi');

const validateCategoryData = (data) =>
  Joi.object({
    name: Joi.string().required(),
  }).validate(data);

module.exports = {
  validateCategoryData,
};