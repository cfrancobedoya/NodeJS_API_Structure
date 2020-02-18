const db = require('mongoose');

db.Promise = global.Promise;

async function connect(url) {
    db.set('useCreateIndex', true);
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });   
    console.log('[db] succesfully connected');
}

module.exports = connect;