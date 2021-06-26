const Joi = require('joi');

const validateUserData = (data) =>
  Joi.object({
    displayName: Joi.string().min(8).required()
      .messages({ 'string.min': '"displayName" length must be at least 8 characters long' }),
    email: Joi.string().pattern(new RegExp(/\S+@\S+\.\S+/)).required()
      .messages({ 'string.pattern.base': '"email" must be a valid email' }),
    password: Joi.string().length(6).required()
      .messages({ 'string.min': '"displayName" length must be 6 characters long' }),
    image: Joi.string().required(),
  }).validate(data);

module.exports = {
  validateUserData,
};