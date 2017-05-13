var express = require('express')
var app = express()
var port = 80;
var cors = require('cors');
var proxy = require('express-http-proxy');

app.use('/messages', proxy('http://52.187.15.224:8082'));
// use it before all route definitions
app.use(cors({origin: 'http://52.187.15.224:8082'}));
app.get('/', function (req, res) {
  res.sendFile(__dirname +'/public/index.html');
})

app.listen(port, function () {
  console.log('Example app listening on port '+ port)
})
