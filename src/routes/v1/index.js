const express = require("express");

const router = express.Router();
const notesRoute = require("./notes-routes");
// TODO: Handle the post blog route
router.use("/notes", notesRoute);

module.exports = router;
