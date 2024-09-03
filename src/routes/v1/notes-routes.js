const express = require("express");

const router = express.Router();
const NotesController = require("../../controllers/notes-controller");
router.post("/", NotesController.create);
router.delete("/:id", NotesController.destroy);
router.patch("/:id", NotesController.update);
router.get("/:id", NotesController.get);
router.get("/", NotesController.getAll);
module.exports = router;
