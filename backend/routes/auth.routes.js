// Import express
const express = require("express");
const router = express.Router();

// Import auth controller
const authController = require("../controllers/auth.controller");

// Login route
router.post("/login", authController.login);

// Export router
module.exports = router;
