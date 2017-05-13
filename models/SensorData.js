var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sensorDataSchema = new Schema({
  time: { type: Date },
  luminosity: { type: Number },
  temperature: { type: Number },
});

module.exports = mongoose.model('SensorData', sensorDataSchema);

