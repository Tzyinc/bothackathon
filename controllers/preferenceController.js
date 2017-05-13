var Preference = require('../models/Preference');

/**
 * Creates a preference
 */
module.exports = 
{
  create: function ({ name, luminosity, temperature }, done) {
    const newPref = Preference({ name, temperature, luminosity });
    newPref.save(done);
  },

  read: function({ name }, done) {
    Preference.findOne({ name: name }, done); 
  },

  update: function( { name, temperature, luminosity }, done) {
    Preference.update({ name: name }, { $set: { temperature: temperature, luminosity: luminosity} }, done);
  },

}
