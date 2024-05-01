const express = require("express");
const { createComment, deleteComment, getAllComments, getCommentById } = require("../../controllers/comments");
const router = express.Router();

router.get("/", getAllComments)
router.get("/:id", getCommentById)
router.post("/", createComment);
router.delete("/:id", deleteComment)

module.exports = router;
