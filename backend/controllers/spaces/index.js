const SPACE = require('../../models/spaces')

const getAllSpaces = async(req, res) => {
    const spaces = await SPACE.find();

    return res.json(spaces);
} 

const createSpace = async(req, res) => {
    const body = req.body;

    if(!body) return res.status(400).json({error: "bad request"})

    try{
        await SPACE.create({
            spaceName: body.name
        })
        return res.status(200).json({message: "new space created"})
    } catch(err) {
        console.log(err)
        return res.json({error: err})
    }
}

module.exports = {getAllSpaces, createSpace}