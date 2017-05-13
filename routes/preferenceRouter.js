var express = require('express');

var preferenceController = require('../controllers/preferenceController');
var state = require('../state');

var router = express.Router();

router.get('/', function(req, res, next) {
  // should return current preference
  var currentPreference = state.currentPreference;
  console.log(currentPreference);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(currentPreference));
  next();
});

router.post('/', function(req, res, next) {
  var opts = req.body;
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



module.exports = router;
