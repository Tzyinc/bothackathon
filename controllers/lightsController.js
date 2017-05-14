const state = require('../state');

const LIMIT = 200;
const getLight = () => {
    if (state.sensorData && state.sensorData.luminosity < state.currentPreference.luminosity) {
        console.log('exceed');
        return 255;
    }
    console.log('good');
    return 25;
}

// const getG = () => {
//     if (state.sensorData && state.sensorData.luminosity < LIMIT) {
//         return 255;
//     }
//     return 150;
// }

// const getB = () => {
//     if (state.sensorData && state.sensorData.luminosity < LIMIT) {
//         return 255;
//     }
//     return 0;
// }

module.exports.getStatus = function(req, res) {
    const uid = req.params.lights_id;
    // const state = require('state');
    let content =  getLight();
    // switch (uid) {
    //     case '1':
    //         content = getR();
    //         break;
    //     case '2':
    //         content = getG();
    //         break;
    //     case '3':
    //         content = getB();
    //         break
    //     default:
    //         content = 0;
    // }
    res.set("Connection", "close");
    res.send('' + content);
}
