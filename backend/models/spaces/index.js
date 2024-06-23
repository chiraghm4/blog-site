const mongoose = require('mongoose')

const spaceSchema = new mongoose.Schema(
    {
        spaceName: {
            type: String,
            required: true,
        },
        createdBy: {
            // type: mongoose.Schema.Types.ObjectId
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        // add ref to users schema
        subscribedUsers: [{
            type: mongoose.Schema.Types.ObjectId
        }]
    }
)

const SPACE = mongoose.model("spaces", spaceSchema)

module.exports = SPACE;
