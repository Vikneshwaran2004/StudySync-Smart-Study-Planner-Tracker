const express = require("express");
const router = express.Router();
const { getTasks, createTask } = require("../controllers/taskController");
const auth = require("../middleware/auth");

router.get("/", auth, getTasks);
router.post("/", auth, createTask);

module.exports = router;
