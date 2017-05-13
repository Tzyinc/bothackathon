var express = require('express');

var preferenceController = require('../controllers/preferenceController');
var state = require('../state');

var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('pages/preferences', { 
    preference: state.currentPreference, 
    sensor: state.sensorData
  });
  next();
});

router.post('/', function(req, res, next) {
  var opts = req.body;
  res.sendStatus(200);
  console.log(opts);
  opts.name = state.currentPreference.name;
  console.log(opts);
  preferenceController.update(opts, function(err) {
    if (err) {
      console.log(err);
    } else {
      preferenceController.read({ name: state.currentPreference.name }, function(err, pref) {
        if (err) {
          console.log(err);
        } else {
          console.log(pref);
          state.currentPreference = pref;
          console.log(state.currentPreference); 
        }
      });
    }
  });
  
});

router.post('/new', function(req, res, next) {
  var opts = req.body;
  preferenceController.read(opts, function(err, pref) {
    if (err || pref) {
      res.sendStatus(403);
    } else {
      console.log(state.sensorData.temperature);
      preferenceController.create({ 
        name: opts.name, 
        temperature: state.sensorData.temperature, 
        luminosity: state.sensorData.luminosity
      }, function(err) {
        if (err)
          res.sendStatus(500);
        else 
          res.sendStatus(200);
      });
    }
  });
});

router.post('/user', function(req, res, next) {
  var opts = req.body;
  console.log(opts);
  preferenceController.read(opts, (err, pref) => {
    if (!!pref) {
      state.currentPreference = pref;
      console.log(state.currentPreference);
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  });
});

router.get('/deactivate', function(req, res, next){
  state.currentPreference = null;
  res.redirect('/');
});


module.exports = router;
