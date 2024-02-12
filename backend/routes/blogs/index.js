const express = require('express')
const router = express.Router();
const {createNewBlog} = require('../../controllers/blogs')

router.post("/", createNewBlog)


module.exports = router