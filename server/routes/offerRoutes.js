const express = require('express');
const router = express.Router();
const { updateDataExtension } = require('../utils/salesforceIntegration');

router.post('/', async (req, res) => {
  try {
    const offerData = req.body;
    console.log('Received offer data:', offerData);

    // Validate offerData
    if (!offerData || Object.keys(offerData).length === 0) {
      throw new Error('Offer data is empty');
    }

    // Add more specific validation if needed
    if (!offerData.name || !offerData.clientName) {
      throw new Error('Offer name and client name are required');
    }

    // Update Salesforce Marketing Cloud Data Extension
    console.log('Updating Data Extension...');
    const result = await updateDataExtension(offerData);
    console.log('Data Extension update result:', result);

    res.status(201).json({ message: 'Offer created successfully', offer: offerData });
  } catch (error) {
    console.error('Error creating offer:', error);
    res.status(400).json({ message: 'Failed to create offer', error: error.message });
  }
});

// Add other routes (GET, PUT, DELETE) as needed

module.exports = router;