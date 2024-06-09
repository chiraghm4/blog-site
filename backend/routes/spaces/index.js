const express = require("express");
const router = express.Router();
const { getAllSpaces, createSpace } = require("../../controllers/spaces");

router.get("/", getAllSpaces);
router.post("/", createSpace);

module.exports = router;
