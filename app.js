var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();
var os = require("os");
var morgan  = require('morgan');

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('static'));
app.use(morgan('combined'));

var port = process.env.PORT || 8082;
var message = process.env.MESSAGE || "This is running in a container";

app.get('/', function (req, res) {
    res.render('home', {
      message: message,
      hostName: os.hostname()
    });
});

app.listen(port, function () {
  console.log("Listening on: http://%s:%s", os.hostname(), port);
});
