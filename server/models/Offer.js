const mongoose = require('mongoose');

const OfferSchema = new mongoose.Schema({
  name: { type: String, required: true },
  clientName: { type: String, required: true },
  ctaText: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  redirectUrl: { type: String, required: true },
  backgroundImageUrl: { type: String },
  clientLogoUrl: { type: String },
  textLine1: { type: String },
  textLine2: { type: String },
  textLine3: { type: String },
  status: { type: String, enum: ['Active', 'Expired', 'Pending'], default: 'Pending' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Offer', OfferSchema);