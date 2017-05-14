const state = require('../state');

module.exports.getStatus = function(req, res) {
    // const uid = req.params.aircon_id;

    let content = 'ON';
    if (state.currentPreference && state.sensorData && state.sensorData.temperature < state.currentPreference.temperature) {
        console.log('exceed');
        content = 'OFF';
    }
    res.set("Connection", "close");
    res.send(content);
}
