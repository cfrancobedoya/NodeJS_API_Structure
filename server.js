const express = require('express');
const bodyParser = require('body-parser');

const response = require('./network/response')

const router = express.Router();

var app = express();
app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router.get('/', function (req, res) {
    res.header({
        "custom-header": "Our custom value. Developed by Cristian Franco",
    });
    console.log(req.headers)
    // res.send('Hello from get');
    response.succes(req, res, 'First answer', 200);
});
router.post('/', function (req, res) {
    console.log(req.query);
    if (req.query.error == 'ok') {
        response.error(req, res, 'Errror simulado', 400);
    } else {
        response.succes(req, res, 'Created correctly', 201);
    }
});

router.patch('/', function (req, res) {
    res.send('Hello from patch');
    // WITH DATA
    res.status(201).send({error: '', body: 'Created correctly'});
    // PLAIN
    res.send('Hello from post');
    // EMPTY
    res.send();
});
router.delete('/message', function (req, res) {
    console.log(req.query);
    // console.log(req.body);
    res.send('Hello from delete ' + req.query.text + ' added correctly');
});

// app.use('/', function (req, res) {
//     res.send('Hello');
// });

app.use('/app', express.static('public'));

app.listen(3000);
console.log('The application is listening on http://localhost:3000');