const BLOG = require('../../models/blogs')

const createNewBlog = async (req, res) => {
    const body = req.body

    if(!body) return res.status(400).json({error: "empty blog"})

    try{
        await BLOG.create({
            title: body.title,
            body: body.blog,
            commentIDs: []
        })
    } catch(err) {
        console.log(err)
    }

    return res.json({message: "new blog created!"})
}

module.exports = {createNewBlog}
