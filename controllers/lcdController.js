const state = require('../state');

module.exports.getStatus = function(req, res) {
    const content = 'Hi,BITS_PLEASE  It\'s Sunny Today';

    console.log(state);
    const rand = parseInt('' + Math.random() * 255);
    const r = rand;
    const g = rand;
    const b = rand;

    const rgb = [r, g, b];
    res.set("Connection", "close");
    console.log([content, ...rgb].join('$'));
    res.send([content, ...rgb].join('$'));
}
