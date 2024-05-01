const express = require('express')
const router = express.Router();
const {createNewBlog, deleteBlog, getAllBlogs, getBlogByID} = require('../../controllers/blogs')

router.get("/", getAllBlogs)
router.get("/:id", getBlogByID)
router.post("/", createNewBlog)
router.delete("/:id", deleteBlog)


module.exports = router