const Joi = require('joi');

const validateBlogPostData = (data) =>
  Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
  }).validate(data);

module.exports = {
  validateBlogPostData,
};