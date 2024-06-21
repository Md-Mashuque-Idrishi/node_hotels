const express = require('express');
const router = express.Router();
const Person = require('./../models/person');  // Path:- Path of person.js.

// Person Detail: Post Method.
router.post('/', async (req, res) => {
  try {
    const data = req.body;  // Assuming the request body contains the person data.
    const newPerson = new Person(data); // Create a new person document using the Mongoose model.
    const response = await newPerson.save();  // Save the new person to the database.
    console.log('Data saved');
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

// Person Detail: Get Method.
router.get('/', async (req, res) => {
  try {
    const data = await Person.find();
    console.log('Data fetched');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

// Get Person by Work Type.
router.get('/:workType', async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType === 'chef' || workType === 'manager' || workType === 'waiter') {
      const response = await Person.find({ work: workType });
      console.log('Response fetched');
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: 'Invalid workType' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update Person by ID.
router.put('/:id', async (req, res) => {
  try {
    const personId = req.params.id;  // Extract the person's ID
    const updatePersonData = req.body; // Updated data for the person.

    const response = await Person.findByIdAndUpdate(personId, updatePersonData, {
      new: true,        // Return the updated document
      runValidators: true,    // Run Mongoose validation
    });

    if (!response) {
      return res.status(404).json({ error: 'Person not found' });
    }

    console.log('Data updated');
    // Send the updated person data as a JSON response
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Delete Person by ID.
router.delete('/:id', async (req, res) => {
  try {
    const personId = req.params.id;  // Extract the person's ID from the Url parameter.

    // Aaauming you have a person model.
    const response = await Person.findByIdAndDelete(personId);

    if (!response) {
      return res.status(404).json({ error: 'Person not found' });
    }
    console.log('Data delete');
    res.status(200).json({ message: 'Person deleted successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;