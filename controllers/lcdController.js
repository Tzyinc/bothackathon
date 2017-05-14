const state = require('../state');

module.exports.getStatus = function(req, res) {
    let name;
    let weather = 'Sunny';

    if (state.currentPreference) {
        name = state.currentPreference.name;
    }
    if (state.rain) {
        weather = 'Rainy';
    }
    const fill = ' '.repeat(11 - name.length);
    const content = `Hi, ${name}!${fill}It's ${weather} Today`;
    console.log(content);
    const rand = parseInt('' + Math.random() * 255);
    const r = rand;
    const g = rand;
    const b = rand;

    const rgb = [r, g, b];
    res.set("Connection", "close");
    console.log([content, ...rgb].join('$'));
    res.send([content, ...rgb].join('$'));
}
