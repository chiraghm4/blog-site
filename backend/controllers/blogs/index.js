const BLOG = require('../../models/blogs')

const getAllBlogs = async (req, res) => {
    const blogs = await BLOG.find()
    return res.json(blogs)
}   

const createNewBlog = async (req, res) => {
    const body = req.body

    if(!body) return res.status(404).json({error: "blog body not found"})

    try{
        await BLOG.create({
            title: body.title,
            body: body.blog,
            
        })
    } catch(err) {
        console.log(err)
    }

    return res.json({message: "new blog created!"})
}

const deleteBlog = async (req, res) => {
    const blogID = req.params.id;

    if(!blogID) return res.status(400).json({error: "no id provided"})

    try {
        const res = await BLOG.deleteOne({
            _id: blogID
        })
        if(res.deletedCount == 0) {
            return res.json({message: "blog already deleted"})
        }
    } catch(err) {
        return res.status(404).json({error: "no blog found"})
    }

    return res.json({message: `blog deleted of id - ${blogID}`})
}

module.exports = {getAllBlogs, createNewBlog, deleteBlog}
