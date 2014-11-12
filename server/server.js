var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = express();




var pub = __dirname + '../public';
app.use(express.static(pub));

app.use(bodyParser.urlencoded({extended: true});

var port = 3500;
var server = app.listen(port, function() {
    console.log('listening');
});


require('./routes')(app);

