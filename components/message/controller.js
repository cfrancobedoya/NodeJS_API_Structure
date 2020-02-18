const store = require('./store');

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[messageController] There is not user or message.')
            return reject('The data is incorrect.');
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }
        store.add(fullMessage);

        resolve(fullMessage);
    });
}

function getMessages() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        console.log(id);
        console.log(message);
        if (!id || !message) {
            reject('Invalid data');
            return false;
        }
        const result = await store.updateText(id, message);

        resolve(result);
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage
}