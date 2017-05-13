var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var preferenceSchema = new Schema({
  name: { type: String, required: true },
  luminosity: { type: Number },
  temperature: { type: Number },
});

module.exports = mongoose.model('Preference', preferenceSchema);