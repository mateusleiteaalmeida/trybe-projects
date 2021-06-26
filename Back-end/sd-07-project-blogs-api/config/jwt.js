const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const secret = 'jwt_secret';

module.exports = {
  jwtConfig,
  secret,
};