const COMMENT = require('../../models/comments')

const createComment = async (req, res) => {
    const body = req.body;
    if(!body) return res.status(400).json({error: "no comment body"})

    try {
        await COMMENT.create({
            commentBody: body.comment,
            blogID: body.blogID
        })
    } catch(err) {
        console.log(err)
    }

    return res.json({message: `comment was added to ${body.blogID}`})
}

const deleteComment = async (req, res) => {
    const commentID = req.params.id;

    if(!commentID) return res.status(400).json({error: "no id provided"})

    try {
        await COMMENT.deleteOne({
            _id: commentID
        })
    } catch(err) {
        return res.status(400).json({error: "no such id found"})
    }

    return res.json({message: `comment deleted of id - ${commentID}`})
}

module.exports = {createComment, deleteComment}

