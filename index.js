var express = require('express');
var cors = require('cors');
var proxy = require('express-http-proxy');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var pug = require('ejs');

var config = require('./config');
var preferenceController = require('./controllers/preferenceController');
var preferenceRouter = require('./routes/preferenceRouter');
var state = require('./state');

var project_routes = require('./routes/apiRouter.js');

const poller = require('./poller.js');

var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static('public'));

poller.startPoll();

mongoose.connect(config.DB_CONNECTION_STRING, (err) => {
  if (err) {
    console.log("ERROR CONNECTING TO MONGODB");
  } else {
    console.log("CONNECTION TO MONGODB SUCCESS");
  }
});

/*
app.use('/messages', proxy('http://52.187.15.224:8082'));
// use it before all route definitions
app.use(cors({origin: 'http://52.187.15.224:8082'}));
*/
app.get('/', function (req, res) {
  res.render('pages/index', { preference: state.currentPreference });
});
app.use('/pref', preferenceRouter);

app.use('/api',project_routes);

app.listen(config.PORT_NUM, function () {
  console.log('Example app listening on port '+ config.PORT_NUM);
});



/*
preferenceController.create({ name: "Hello" }, (err) => {
  if (err)
    console.log("FAILED");
  else
    console.log("DONE");
});
*/

preferenceController.read({ name: "Hello" }, (err, pref) => {
  if (err)
    console.log("Failed to read");
  else
    console.log(pref);
})

preferenceController.read({ name: "Ho" }, (err, pref) => {
  if (err)
    console.log("Failed to read");
  else
    console.log(pref);
})
