const express = require("express");
const { createComment, deleteComment } = require("../../controllers/comments");
const router = express.Router();

router.post("/", createComment);
router.delete("/:id", deleteComment)

module.exports = router;
