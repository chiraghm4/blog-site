const express = require('express')
const router = express.Router();
const {createNewBlog, deleteBlog, getAllBlogs, getBlogByID, getBlogBySpace} = require('../../controllers/blogs')
const requireAuth = require('../../middleware/requireAuth')

// protecting the routes
router.use(requireAuth)

router.get("/", getAllBlogs)
router.get("/:id", getBlogByID)
router.post("/", createNewBlog)
router.delete("/:id", deleteBlog)
router.get('/spaceid/:id', getBlogBySpace)

module.exports = router