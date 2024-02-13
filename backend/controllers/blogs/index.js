const BLOG = require('../../models/blogs')

const createNewBlog = async (req, res) => {
    const body = req.body

    if(!body) return res.status(400).json({error: "empty blog"})

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
        await BLOG.deleteOne({
            _id: blogID
        })
    } catch(err) {
        console.log(err)
    }

    return res.json({message: `blog deleted of id - ${blogID}`})
}

module.exports = {createNewBlog, deleteBlog}
