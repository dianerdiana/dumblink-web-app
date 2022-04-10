const express = require("express");

const router = express.Router();

const { addUserLink } = require("../controllers/user-links");
const { addLink } = require("../controllers/links");

//Add User Link
router.post("/add-user-link", addUserLink);

//Add Link
router.post("/add-link", addLink);

module.exports = router;
