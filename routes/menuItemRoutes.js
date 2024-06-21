const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/menu');  // Ensure this path is correct.

// Menu Item Detail: Post Method.
router.post('/', async (req, res) => {
  try {
    const data = req.body;  // Assuming the request body contains the menu item data.
    const newMenuItem = new MenuItem(data); // Create a new menu item document using the Mongoose model.
    const response = await newMenuItem.save();  // Save the new menu item to the database.
    console.log('Data saved');
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

// Menu Item Detail: Get Method.
router.get('/', async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log('Data fetched');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
