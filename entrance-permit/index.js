import express from 'express'
import bodyParser from 'body-parser';
import routes from './api/routes/index.js'

const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

routes(app)

app.listen(port);

console.log("Building permit application server on: " + port);
