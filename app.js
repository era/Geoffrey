var express = require('express');
var app = express();

var port = Number(process.env.PORT || 5000);;

app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');

app.get('/:pg', function(req, res){
	res.render(req.params.pg);
});

app.get('/',function(req,res){
	res.render('index.html');
});

app.listen(port);
console.log('Server running at http://127.0.0.1:'+port);