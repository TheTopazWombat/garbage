var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var massive = require('massive');
var testCtrl = require('./controllers/testCtrl');

var connectionString = "postgres://postgres:unnamed1@localhost/fronttoback";

var app = module.exprts = express();




app.use(bodyParser.json());
app.use(cors());

var massiveInstance = massive.connectSync({
  connectionString: connectionString
});


app.set('db', massiveInstance);

var db = app.get('db');

app.use(express.static(__dirname + '/../public'));


app.get('/customer/:id');

app.get('/products', function(req, res, next) {
  db.get_all_products(function(err, products) {
    res.set(200).json(products);
  });
});




var port = 3000;
app.listen(port, function() {
  console.log('listening on ', port);
});
