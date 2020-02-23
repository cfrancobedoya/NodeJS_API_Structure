const db = require('mongoose');

db.Promise = global.Promise;

// 'mongodb://user:user1234@ds255107.mlab.com:55107/telegrom'
async function connect(url) {
    db.set('useCreateIndex', true);
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('[db] succesfully connected');
}

module.exports = connect;
