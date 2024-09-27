const Offer = require('../models/Offer');

exports.getOffers = async (req, res) => {
  try {
    const offers = await Offer.find();
    res.json(offers);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createOffer = async (req, res) => {
  try {
    const newOffer = new Offer(req.body);
    const savedOffer = await newOffer.save();
    res.status(201).json(savedOffer);
  } catch (error) {
    res.status(400).json({ message: 'Invalid offer data' });
  }
};

// Add updateOffer and deleteOffer methods here