const Joi = require('joi');

const validateLogin = (data) =>
  Joi.object({
    email: Joi.string().email().required()
      .messages({ 'string.empty': '"email" is not allowed to be empty' }),
    password: Joi.string().min(6).required()
      .messages({ 'string.empty': '"password" is not allowed to be empty' }),
  }).validate(data);

module.exports = {
  validateLogin,
};