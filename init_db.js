var mongoose = require('mongoose');

var config = require('./config');
var Preference = require('./models/Preference');

mongoose.connect(config.DB_CONNECTION_STRING);
Preference.remove({}, function(err) {
  if (err)
    console.log(err);
});

var pref = new Preference({ name: "Alice", luminosity: 10000, temperature: 30 });
pref.save();
pref = new Preference({ name: "Bob", luminosity: 0, temperature: 15 });
pref.save();

