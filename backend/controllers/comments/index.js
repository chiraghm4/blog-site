const COMMENT = require("../../models/comments");
const BLOG = require("../../models/blogs");
const { Types } = require("mongoose");

const getAllComments = async (req, res) => {
  const response = await COMMENT.find();
  return res.json(response);
};

const getCommentById = async (req, res) => {
  const commentID = req.params.id;

  try {
    const commentById = await COMMENT.findById(commentID);

    if (!commentById) res.status(400).json({ error: "comment not found" });

    res.status(200).json(commentById);
  } catch (error) {
    res.json({ error: error });
  }
};

const createComment = async (req, res) => {
  const body = req.body;
  if (!body) return res.status(404).json({ error: "comment body not found" });

  try {
    await COMMENT.create({
      blogID: body.blogID,
      commentBody: body.body,
    });
  } catch (err) {
    console.error(err);
  }

  return res.status(201).json({ message: `comment added to ${body.blogID}` });
};

const deleteComment = async (req, res) => {
  const commentId = req.params.id;

  try {
    const response = await COMMENT.findByIdAndDelete(commentId)
    if(!response) return res.status(404).json({message: "comment not found"})
    
    return res.status(200).json({ message: "deleted successfully" });
  } catch (e) {
    return res.json({ error: e });
  }
};

module.exports = {
  getAllComments,
  createComment,
  deleteComment,
  getCommentById,
};
