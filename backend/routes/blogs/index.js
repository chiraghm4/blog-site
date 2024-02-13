const express = require('express')
const router = express.Router();
const {createNewBlog, deleteBlog} = require('../../controllers/blogs')

router.post("/", createNewBlog)
router.delete("/:id", deleteBlog)


module.exports = router