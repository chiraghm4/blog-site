const COMMENT = require("../../models/comments");
const BLOG = require("../../models/blogs");

const getAllComments = async (req, res) => {
  const response = await COMMENT.find();
  return res.json(response);
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
  const id = req.params.id;

  console.log(id, 'id')
  COMMENT.findOne({_id: id}, (err, ) => {

  })


//   try {
//     await COMMENT.deleteOne({ _id: id });
//     return res.status(200).json({ message: `deleted successfully ${id}` });
//   } catch (err) {
//     console.error(err);
//     return res.json({ error: err });
//   }

res.json({"message": "lols"})
};

module.exports = { getAllComments, createComment, deleteComment };
