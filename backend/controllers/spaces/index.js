const SPACE = require('../../models/spaces')

const getAllSpaces = async(req, res) => {
    const spaces = await SPACE.find();

    return res.json(spaces);
} 

const createSpace = async(req, res) => {
    const body = req.body;

    if(!body) return res.status(400).json({error: "bad request"})

    try{
        const exists = await SPACE.findOne({spaceName: body.name})
        if(exists) {
            return res.status(400).json({error: "space already exists"})
        }
        
        await SPACE.create({
            spaceName: body.name,
            createdBy: req.user._id
        })
        return res.status(200).json({message: "new space created"})
    } catch(err) {
        console.log(err)
        return res.status(401).json({error: err})
    }
}

module.exports = {getAllSpaces, createSpace}