const express = require('express');
const router = express.Router();

const { createReceipe, getAllReceipes, getReceipeById, updateReceipe, deleteReceipe } = require("../controller/receipeController");

router.post("/", createReceipe);
router.get("/", getAllReceipes);
router.get("/:id", getReceipeById);
//update the recipes
router.put("/:id", updateReceipe);
router.patch("/:id", updateReceipe);
router.delete("/:id", deleteReceipe);

module.exports = router;