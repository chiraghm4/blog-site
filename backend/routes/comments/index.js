const express = require("express");
const { createComment, deleteComment, getAllComments } = require("../../controllers/comments");
const router = express.Router();

router.get("/", getAllComments)
router.post("/", createComment);
router.delete("/:id", deleteComment)

module.exports = router;
