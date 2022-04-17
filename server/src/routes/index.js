const express = require("express");

const router = express.Router();

const { register, login, checkAuth, logout } = require("../controllers/auth");
const {
  addUserLink,
  getUserLinks,
  getUserLink,
  deleteUserLink,
  updateViews,
} = require("../controllers/user-links");
const { addLink } = require("../controllers/links");

//import middlewares
const { auth } = require("../middlewares/auth");
const { uploadFile, uploadImage } = require("../middlewares/uploadFile");
const { getUser } = require("../controllers/users");

//route auth
router.post("/register", register);
router.post("/login", login);
router.get("/check-auth", auth, checkAuth);
router.get("/user/:id", getUser);

//Add User Link
router.post("/add-user-link", auth, uploadImage("image"), addUserLink);
router.get("/user-links/:id", auth, getUserLinks);
router.get("/user-link/:uniqueLink", getUserLink);
router.delete("/delete-user-link/:id", deleteUserLink);
router.patch("/update-view/:id", updateViews);

//Add Link
router.post("/add-link/:id", addLink);

module.exports = router;
