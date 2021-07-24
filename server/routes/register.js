const express = require("express");
const router = express.Router();
const { users } = require("../models");

router.get("/", async (req, res) => {
    res.send("This is the register endpoint")
});

router.post("/", async (req, res) => {
  const userData = req.body;
  await users.create(userData);
  res.json(userData);
});

module.exports = router;