const { User } = require('../models');
const { validateUserData } = require('./validations/UsersValidations');

const createUser = async (data) => {
  const { error } = validateUserData(data);
  if (error) return { message: error.details[0].message, code: 400 };
  const { email } = data;
  const user = await User.findOne({ where: { email } });
  if (user) return { message: 'User already registered', code: 409 };
  return User.create(data);
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) return { message: 'User does not exist', code: 404 };
  return user;
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};