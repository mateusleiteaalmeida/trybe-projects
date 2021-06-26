const jwt = require('jsonwebtoken');
const { jwtConfig, secret } = require('../config/jwt');
const { User } = require('../models');
const { validateLogin } = require('./validations/LoginValidations');

const login = async (data) => {
  const { error } = validateLogin(data);
  if (error) return { message: error.details[0].message, code: 400 };
  const { email, password } = data;
  const user = await User.findOne({ where: { email, password } });
  if (!user) return { message: 'Invalid fields', code: 400 };
  const token = jwt.sign({ email, password }, secret, jwtConfig);
  return { token };
};

module.exports = {
  login,
};