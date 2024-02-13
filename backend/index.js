const express = require("express");
const connectDB = require("./connect");
const app = express();
const blogRouter = require('./routes/blogs')
const commentRouter = require('./routes/comments')

const PORT = 8001;

connectDB("mongodb://localhost:27017/blog-site")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => console.log(`error in mongo: ${err}`));

app.use(express.json());
app.use("/blog", blogRouter)
app.use("/comment", commentRouter)

app.get("/", (req, res) => {
  res.send("hello");
});


app.listen(PORT, () => {
  console.log(`listening to http://127.0.0.1:${PORT}`);
});
