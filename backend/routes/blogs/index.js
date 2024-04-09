const express = require('express')
const router = express.Router();
const {createNewBlog, deleteBlog, getAllBlogs} = require('../../controllers/blogs')

router.get("/", getAllBlogs)
router.post("/", createNewBlog)
router.delete("/:id", deleteBlog)


module.exports = router