const express = require('express');
const router = express.Router();
const Ad = require('../models/Ad');

// Получить все объявления
router.get('/', async (req, res) => {
  const ads = await Ad.find().populate('owner', 'name email');
  res.json(ads);
});

// Создать объявление
router.post('/', async (req, res) => {
  const { title, description, price, imageUrl, owner } = req.body;
  try {
    const ad = new Ad({ title, description, price, imageUrl, owner });
    await ad.save();
    res.json(ad);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
