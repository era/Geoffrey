var express = require('express'),
	app = express(),
	Geofrey = {};

app.engine('html', require('ejs').renderFile);
app.get('/:pg', function(req, res){
	res.render(req.params.pg);
});

Geoffrey.serves = function(views_folder) {
	app.set('views', views_folder);
	return this;
}

Geoffrey.with = function(public_folder) {
	app.use(express.static( public_folder));
	return this;
}

Geoffrey.on = function(port) {
	app.listen(port);
	console.log('Server running at http://127.0.0.1:'+port);
	return this;
}

Geoffrey.container = app;

module.exports = Geofrey;