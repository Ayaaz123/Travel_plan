const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  destination: { type: String, required: true, index: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  activities: { type: [String], required: true }
});

planSchema.pre('save', function (next) {
  if (this.startDate >= this.endDate) {
    return next(new Error('Start date must be before end date.'));
  }
  next();
});

module.exports = mongoose.model('Plan', planSchema);

