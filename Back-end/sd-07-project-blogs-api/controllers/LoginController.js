const LoginService = require('../services/LoginService');

const login = async (req, res) => {
  try {
    const data = req.body;
    const result = await LoginService.login(data);
    if (result.message) {
      return res.status(result.code).json({ message: result.message });
    }
    return res.status(200).json(result); 
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  login,
};