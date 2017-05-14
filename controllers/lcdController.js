const state = require('../state');

module.exports.getStatus = function(req, res) {
    let name = 'Anonymous';
    let weather = 'Sunny';

    if (state.currentPreference) {
        name = state.currentPreference.name;
    }
    console.log(state);
    if (state.rain) {
        weather = 'Rainy';
    }
    const fill = ' '.repeat(11 - name.length);
    const content = `Hi, ${name}!${fill}It's ${weather} Today`;
    console.log(content);

    let r = 255;
    let g = 255;
    let b = 255;

    if ( name == 'Anonymous' ) {
        r = 255;
        g = 255;
        b = 255;
    }
    else if (weather == 'Sunny') {
        r = 250;
        g = 255;
        b = 130;
    } else if (weather == 'Rainy') {
        r = 130;
        g = 170;
        b = 255;
    }

    const rgb = [r, g, b];
    res.set("Connection", "close");
    console.log([content, ...rgb].join('$'));
    res.send([content, ...rgb].join('$'));
}
