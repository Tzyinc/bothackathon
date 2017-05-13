var Preference = require('../models/Preference');

/**
 * Creates a preference
 */
module.exports = 
{
  create: function ({ name }, done) {
    const newPref = Preference({ name });
    newPref.save(done);
  },

  read: function({ name }, done) {
    Preference.findOne({ name: name }, done); 
  }

}
