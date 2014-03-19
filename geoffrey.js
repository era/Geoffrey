var express = require('express'),
	app = express(),
	Geofrey = {};

app.engine('html', require('ejs').renderFile);
app.get('/:pg', function(req, res){
	res.render(req.params.pg);
});

Geofrey.serves = function(views_folder) {
	app.set('views', views_folder);
	return this;
}

Geofrey.with = function(public_folder) {
	app.use(express.static( public_folder));
	return this;
}

Geofrey.on = function(port) {
	app.listen(port);
	console.log('Server running at http://127.0.0.1:'+port);
	return this;
}

module.exports = Geofrey;