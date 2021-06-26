const { Router } = require('express');
const authTokenMiddleware = require('../middlewares/authTokenMiddleware');

const router = Router();

const CategoriesController = require('../controllers/CategoriesController');

router.post('/categories', authTokenMiddleware, CategoriesController.createCategory);
router.get('/categories', authTokenMiddleware, CategoriesController.getAllCategories);

module.exports = router;