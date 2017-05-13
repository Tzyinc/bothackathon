 var express    = require('express');
 var router     = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'API entry point is /api/<object>'})
});

const airconController = require('../controllers/airconController.js');
const lightsController = require('../controllers/lightsController.js');
const servoController = require('../controllers/servoController.js');
const lcdController = require('../controllers/lcdController.js');
const poller = require('../poller.js');

router.route('/aircon/:aircon_id').get(airconController.getStatus);
router.route('/lights/:lights_id').get(lightsController.getStatus);
router.route('/lcd').get(lcdController.getStatus);
router.route('/servo').get(servoController.getStatus);


module.exports = router;