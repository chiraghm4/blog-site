const express = require('express')
const router = express.Router();
const {createNewBlog, deleteBlog, getAllBlogs, getBlogByID, getBlogBySpace} = require('../../controllers/blogs')

router.get("/", getAllBlogs)
router.get("/:id", getBlogByID)
router.post("/", createNewBlog)
router.delete("/:id", deleteBlog)
router.get('/spaceid/:id', getBlogBySpace)

module.exports = router