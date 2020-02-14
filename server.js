const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();
app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router.get('/', function (req, res) {
    res.send('Hello from get');
});
router.post('/', function (req, res) {
    res.send('Hello from post');
});
router.patch('/', function (req, res) {
    res.send('Hello from patch');
});
router.delete('/message', function (req, res) {
    console.log(req.query);
    // console.log(req.body);
    res.send('Hello from delete ' + req.query.text + ' added correctly');
});

// app.use('/', function (req, res) {
//     res.send('Hello');
// });

app.listen(3000);
console.log('The application is listening on http://localhost:3000');