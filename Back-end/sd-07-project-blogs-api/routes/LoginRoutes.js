const { Router } = require('express');

const router = Router();

const LoginController = require('../controllers/LoginController');

router.post('/login', LoginController.login);

module.exports = router;