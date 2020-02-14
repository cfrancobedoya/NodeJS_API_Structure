const express = require('express');
const router = express.Router();

var app = express();

app.use(router);

router.get('/', function (req, res) {
    res.send('Hello from get');
});
router.post('/', function (req, res) {
    res.send('Hello from post');
});
router.patch('/', function (req, res) {
    res.send('Hello from patch');
});
router.delete('/', function (req, res) {
    res.send('Hello from delete');
});

// app.use('/', function (req, res) {
//     res.send('Hello');
// });

app.listen(3000);
console.log('The application is listening on http://localhost:3000');