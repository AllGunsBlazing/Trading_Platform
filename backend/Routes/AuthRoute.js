const { Signup, Login } = require("../controllers/AuthController");
const router = require("express").Router();
const express = require("express");

router.post("/signup", Signup);
router.post("/login", Login);

module.exports = router;