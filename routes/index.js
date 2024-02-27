const express = require('express');
const router = express.Router();
const sendData = require("../controllers/")

// Static Routes
// Set up "public" folder / subfolders for static files
router.use(express.static("public"));

// Set up index route
router.get(
    "",
    sendData
  );

module.exports = router;