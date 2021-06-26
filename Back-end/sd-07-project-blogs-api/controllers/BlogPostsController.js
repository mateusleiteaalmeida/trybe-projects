const BlogPostsService = require('../services/BlogPostsService');

const createBlogPost = async (req, res) => {
  try {
    const { user, body } = req;
    const result = await BlogPostsService.createBlogPost(body, user);
    if (result.message) {
      return res.status(result.code).json({ message: result.message });
    }
    return res.status(201).json(result); 
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getAllBlogPosts = async (req, res) => {
  try {
    const result = await BlogPostsService.getAllBlogPosts();
    console.log(result);
    return res.status(200).json(result); 
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getBlogPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await BlogPostsService.getBlogPostById(id);
    if (result.message) {
      return res.status(result.code).json({ message: result.message });
    }
    return res.status(200).json(result); 
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
};