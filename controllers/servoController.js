const state = require('../state');

module.exports.getStatus = function(req, res) {
    let content = 'OFF';

    if (state.rain) {
        content = 'ON';
    }

    // const content = uid == 1 ? 'OFF' : 'ON';
    res.set("Connection", "close");
    res.send(content);
}
