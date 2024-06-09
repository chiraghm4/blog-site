const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    spaceID: {
      type: String
    }
    
  },
  { timestamps: true }
);

const BLOG = mongoose.model("blogs", blogSchema);

module.exports = BLOG;
