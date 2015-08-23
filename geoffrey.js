var express = require('express'),
	app = express(),
	Geoffrey = {};

Geoffrey.__isTypeSet = false;
app.get('/:pg', function(req, res){
	res.render(req.params.pg);
});

Geoffrey.serves = function(views_folder) {
	app.set('views', views_folder);
	return this;
}

Geoffrey.render_with = function(type) {
	if(type == "hbs") {
		app.set('view engine', 'hbs');
	} else if (type == "html") {
		app.engine('html', require('ejs').renderFile);
	} else {
		app.set('view engine', type);
	}
	Geoffrey.__isTypeSet = true;
	return this;
}

Geoffrey.with = function(public_folder) {
	app.use(express.static( public_folder));
	return this;
}
Geoffrey.index_as = function(filename) {
	app.get('/', function(req, res){
		res.render(filename);
	});
	return this;
}

Geoffrey.on = function(port) {
	if(!Geoffrey.__isTypeSet) {
		app.engine('html', require('ejs').renderFile);
	}
	app.listen(port);
	console.log('Server running at http://127.0.0.1:'+port);
	return this;
}

Geoffrey.container = app;

module.exports = Geoffrey;