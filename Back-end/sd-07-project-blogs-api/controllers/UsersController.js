const jwt = require('jsonwebtoken');
const { jwtConfig, secret } = require('../config/jwt');
const UsersService = require('../services/UsersService');

const createUser = async (req, res) => {
  try {
    const data = req.body;
    const { email, password } = data;
    const token = jwt.sign({ email, password }, secret, jwtConfig);
    const result = await UsersService.createUser(data);
    if (result.message) {
      return res.status(result.code).json({ message: result.message });
    }
    return res.status(201).json({ token }); 
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const result = await UsersService.getAllUsers();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UsersService.getUserById(id);
    if (result.message) {
      return res.status(result.code).json({ message: result.message });
    }
    return res.status(200).json(result); 
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};