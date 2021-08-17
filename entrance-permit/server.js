var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(function(req, res){
    res.status(404).send({url: req.originalUrl + ' not found'})
})

var routes = require('./api/routes/routeController')
routes(app)

app.listen(port);

console.log("Building permit application server on: " + port);
