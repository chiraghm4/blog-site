const mongoose = require('mongoose')

const spaceSchema = new mongoose.Schema(
    {
        spaceName: {
            type: String,
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
