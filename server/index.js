var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var massive = require('massive');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
var config = require('./config.js');

var connectionString = config.connectionString;

var app = module.exports = express();


app.use(session({secret: config.sessionSecret}));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(cors());

var massiveInstance = massive.connectSync({
  connectionString: connectionString
});


app.set('db', massiveInstance);

var db = app.get('db');

app.use(express.static(__dirname + '/../public'));

var techCtrl = require('./controllers/serverTechCtrl.js');
var userCtrl = require('./controllers/serverUserCtrl.js');
var cmCtrl = require('./controllers/serverCmCtrl.js');

app.get('/jobs/:invoice', techCtrl.getJobByInvoice);

app.get('/customers/all', techCtrl.getAllCustomers);

app.get('/appointments', techCtrl.getAllAppointments);

// app.post('/accounts/new', )

// app.get('/products', function(req, res, next) {
//   db.get_all_products(function(err, products) {
//     res.set(200).json(products);
//   });
// });




var port = 3000;
app.listen(port, function() {
  console.log('listening on ', port);
});
