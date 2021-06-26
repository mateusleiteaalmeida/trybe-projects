const { Router } = require('express');
const authTokenMiddleware = require('../middlewares/authTokenMiddleware');

const router = Router();

const UsersController = require('../controllers/UsersController');

router.post('/user', UsersController.createUser);
router.get('/user', authTokenMiddleware, UsersController.getAllUsers);
router.get('/user/:id', authTokenMiddleware, UsersController.getUserById);

module.exports = router;