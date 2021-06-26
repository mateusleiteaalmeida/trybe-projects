const { Router } = require('express');
const authTokenMiddleware = require('../middlewares/authTokenMiddleware');

const router = Router();

const BlogPostsController = require('../controllers/BlogPostsController');

router.post('/post', authTokenMiddleware, BlogPostsController.createBlogPost);
router.get('/post', authTokenMiddleware, BlogPostsController.getAllBlogPosts);
router.get('/post/:id', authTokenMiddleware, BlogPostsController.getBlogPostById);

module.exports = router;