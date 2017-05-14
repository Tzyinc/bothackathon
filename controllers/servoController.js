const state = require('../state');

module.exports.getStatus = function(req, res) {
    const rand = parseInt(Math.random());
    let content = 'OFF';

    if (rand > 0.8 ) { 
        content = 'ON';
    }

    // const content = uid == 1 ? 'OFF' : 'ON';
    res.set("Connection", "close");
    res.send(content);
}
