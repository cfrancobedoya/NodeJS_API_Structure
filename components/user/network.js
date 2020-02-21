const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function(req, res) {
    controller.addUser(req.body.name)
        .then(data => {
            response.succes(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, 'Internal Error', 500, e);
        })
});

router.get('/', function (req, res) {
    controller.listUsers()
        .then((userList) => {
            response.succes(req, res, userList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        })
});

module.exports = router;