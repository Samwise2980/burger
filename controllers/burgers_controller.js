const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
});

router.post("/api/burgers", (req, res) => {
});

router.put("/api/burgers/:newBurger", (req, res) => {
});

module.exports = router;
