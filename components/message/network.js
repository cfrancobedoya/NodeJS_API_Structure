const express = require('express');
const response = require('../../network/response');

const router = express.Router();

router.get('/', function (req, res) {
    console.log(req.headers);
    res.header({
        "custome-header": "Our custom value"
    });
    response.succes(req, res, 'Lista de mensajes');
});

router.post('/', function (req, res) {
    console.log(req.query);
    if (req.query.error == "ok") {
        response.error(req, res, 'Unexpected error', 500, 'It is just a simulation error');
    } else {
        response.succes(req, res, 'Created correctly');
    }
});

module.exports = router;