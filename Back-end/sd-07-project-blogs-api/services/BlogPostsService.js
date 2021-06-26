const { BlogPost, Category, PostsCategory, User } = require('../models');
const { validateBlogPostData } = require('./validations/BlogPostsValidations');

const createPostsCategories = async (categoryId, postId) => {
  await categoryId.map((catId) => PostsCategory.create({ categoryId: catId, postId }));
};

const verifyPostsCategories = async (categoryIds) => {
  const categories = await Category.findAll();
  const allCategoriesIds = categories.map((category) => category.dataValues.id);
  const checkCategoryIds = categoryIds.every((categoryId) => allCategoriesIds.includes(categoryId));
  return checkCategoryIds;
};

const createBlogPost = async (data, user) => {
  const { error } = validateBlogPostData(data);
  if (error) return { message: error.details[0].message, code: 400 };
  console.log(data);
  const { categoryIds, title, content } = data;
  if (await verifyPostsCategories(categoryIds) === false) {
    return { message: '"categoryIds" not found', code: 400 };
  }
  const { id } = await user.dataValues;
  const result = await BlogPost.create({ title, content, userId: id });
  await createPostsCategories(categoryIds, result.id);
  return result;
};

const getAllBlogPosts = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return blogPosts;
};

const getBlogPostById = async (id) => {
  const blogPost = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!blogPost) return { message: 'Post does not exist', code: 404 };
  return blogPost;
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
};