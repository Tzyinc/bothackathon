var mongoose = require('mongoose');

var config = require('./config');
var Preference = require('./models/Preference');

mongoose.connect(config.DB_CONNECTION_STRING);
Preference.remove({}, function(err) {
  if (err)
    console.log(err);
});

var pref = new Preference({ name: "Alice", luminosity: 80, temperature: 27 });
pref.save();
pref = new Preference({ name: "Bob", luminosity: 60, temperature: 30 });
pref.save();

