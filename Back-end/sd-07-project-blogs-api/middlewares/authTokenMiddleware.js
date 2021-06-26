const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { secret } = require('../config/jwt');

const authTokenMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token not found' });
    const { email, password } = jwt.verify(token, secret);
    const user = await User.findOne({ where: { email, password } });
    if (user === null) return res.status(401).json({ message: 'Expired or invalid token' });
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = authTokenMiddleware;