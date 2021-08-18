var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/routeController')
routes(app)

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(port);

console.log("Building permit application server on: " + port);
