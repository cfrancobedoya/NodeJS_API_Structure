const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

// const router = require('./components/message/network');
const router = require('./network/routes');

db('mongodb://cristian:UlRY53hxJueBpSiK@cluster0-shard-00-00-ksmmt.gcp.mongodb.net:27017,cluster0-shard-00-01-ksmmt.gcp.mongodb.net:27017,cluster0-shard-00-02-ksmmt.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(router);
router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('The application is listening on http://localhost:3000');