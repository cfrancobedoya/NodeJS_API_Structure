const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;
db.set('useCreateIndex', true);
db.connect('mongodb://cristian:UlRY53hxJueBpSiK@cluster0-shard-00-00-ksmmt.gcp.mongodb.net:27017,cluster0-shard-00-01-ksmmt.gcp.mongodb.net:27017,cluster0-shard-00-02-ksmmt.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
console.log('[db] succesfully connected');

function addMessage(message) {
    // list.push(message);
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage() {
    // return list;
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add: addMessage,
    list: getMessage
    // get,
    // update
}