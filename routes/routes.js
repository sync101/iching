//equivalent to example's routes_main.js

var oracle = require('../controllers/oracle.js');
var auth = require('../controllers/auth.js');

app.get('/iching/login', auth.login);

app.post('iching/signup', auth.signup);

app.get( '/iching', oracle.begin);

app.post('/iching/divine', oracle.divine);

app.get('/iching/report', oracle.report);
