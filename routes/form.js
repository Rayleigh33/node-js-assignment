const express = require("express");
const router = express.Router();
const { User } = require("../database/dbConnection");

router.post("/form", async (req, res) => {
  try {
    const { uniqueId, title, name, email, phonenumber, isGraduate } = req.body;
    const user = await User.create({
      uniqueId,
      title,
      name,
      email,
      phonenumber,
      isGraduate,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/fill_data", async (req, res) => {
  try {
    const { uniqueId, name, email, phonenumber, isGraduate } = req.body;

    const user = await User.create({
      uniqueId,
      name,
      email,
      phonenumber,
      isGraduate,
    });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

router.get("/fill_data", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
