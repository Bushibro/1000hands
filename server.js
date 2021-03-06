var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var router = require('./server/router');

var app = express();
var port = 3000;

app.use(bodyParser.json());

app.options('*', cors());

app.use(express.static(process.cwd() + '/public'));

app.use("/",router);

app.listen(port, function() {
  console.log('Server listening on port: ' + 3000);
});
