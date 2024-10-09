const express = require("express");

const router = express.Router();
const userActions = require("../controllers/userActions");

router.get("/", userActions.browse);
router.get("/:id", userActions.read);
router.post("/", userActions.add);
router.put("/:id", userActions.edit);
router.delete("/:id", userActions.destroy);

module.exports = router;
