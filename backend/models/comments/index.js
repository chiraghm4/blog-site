const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    blogID: { type: mongoose.Schema.Types.ObjectId, required: true },
    commentBody: { type: String, required: true },
  },
  { timestamps: true }
);

const COMMENT = mongoose.model("comments", commentSchema);

module.exports = COMMENT;
