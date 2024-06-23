const express = require("express");
const router = express.Router();
const { getAllSpaces, createSpace } = require("../../controllers/spaces");
const requireAuth = require('../../middleware/requireAuth')

//protecting routes 
router.use(requireAuth)

router.get("/", getAllSpaces);
router.post("/", createSpace);

module.exports = router;
