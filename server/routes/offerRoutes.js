const express = require('express');
const router = express.Router();
const offerController = require('../controllers/offerController');

router.get('/', offerController.getOffers);
router.post('/', offerController.createOffer);
// Add routes for updateOffer and deleteOffer

module.exports = router;