var SensorData = require('../models/SensorData');

module.exports = 
{
  create: function ({ time, luminosity, temperature }, done) {
    const newData = SensorData({ time, luminosity, temperature });
    newData.save(done);
  },

  read: function(numData, done) {
    const data =  SensorData.find();
    const slice = data.slice(0, number);
    done(err, slice);
  }

}
