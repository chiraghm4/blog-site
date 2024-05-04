const express = require("express");
const connectDB = require("./connect");
const app = express();
const dotenv = require('dotenv')
const blogRouter = require('./routes/blogs')
const commentRouter = require('./routes/comments')
const cors = require('cors')

dotenv.config();

//mongodb://localhost:27017

connectDB(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => console.log(`error in mongo: ${err}`));

app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use("/blog", blogRouter)
app.use("/comment", commentRouter)

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(process.env.PORT, () => {
  console.log(`listening to http://127.0.0.1:${process.env.PORT}`);
});
