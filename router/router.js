const express = require("express");
const trimRequest = require("trim-request");

const router = express.Router();

const authController = require("../Controllers/auth.controller");

// Auth Controller 
router.post("/login", trimRequest.all, authController.login);
router.post("/forgot", trimRequest.all, authController.forgotPassword);
router.post("/reset", trimRequest.all, authController.resetPassword);

module.exports = router