var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

var PRODUCTS_FILES = path.join(__dirname, "products.json");

//Set Port
app.set('port', (process.env.PORT || 3000));

// Set Static path
app.use(express.static(path.join(__dirname, 'client')));

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// GET PRODUCTS 
app.get('/api/products', function(req, res){
	fs.readFile(PRODUCTS_FILES, function(e, data){
		res.setHeader('Cache-Control','no-cache')
		res.json(JSON.parse(data));
	});
});

// Add Products 
app.post('/api/products', function(req, res){
	fs.readFile(PRODUCTS_FILES, function(e, data) {
		var products = JSON.parse(data);

		products.push(req.body);
		fs.writeFile(PRODUCTS_FILES, JSON.stringify(products, null, 3, function(e){
			res.setHeader('Cache-Control','no-cache')
			res.json(JSON.parse(products));
		}));

	});
});

// Start Server
app.listen(app.get('port'), function(){
	console.log('Server Has Started On Port: '+ app.get('port'));
});