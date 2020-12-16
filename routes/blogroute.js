const express = require("express");
const router = express.Router();
const {
  getAllBlogs,
  getBlogByID,
  createNewBLog,
  updateBLogById,
} = require("../controllers/blogcontroller");

router.route("/allblogs").get(getAllBlogs);
router.route("/:id").get(getBlogByID);
router.route("/addnewblog").post(createNewBLog);
router.route("/updateblog").patch(updateBLogById);

module.exports = router;
