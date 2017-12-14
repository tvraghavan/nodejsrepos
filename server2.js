var express = require('express');
var app = express();
var routes = require('./router');
var port    =   process.env.PORT || 3100;


routes.configure(app);

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);
