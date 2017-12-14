var orderservices = require('./orderservices');

module.exports = {
  configure: function(app) {
	  
	function handleError(res, reason, message, code) {
      console.log("ERROR: " + reason);
      res.status(code || 500).json({"error": message});
    }
	
	app.get('/', function(req, res) {
		res.set('Content-Type', 'application/json');
		res.send(JSON.stringify(''));
	});

	app.get('/orders', function(req, res) {
		res.set('Content-Type', 'application/json');
		res.send(JSON.stringify(''));
	});
	
  }
};



