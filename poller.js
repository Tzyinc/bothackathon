const fetch = require('node-fetch');

const state = require('./state');
const sensorDataController = require('./controllers/sensorDataController');

const isSuccess = statusCode => statusCode >= 200 && statusCode < 300;

const options = {
    method: 'GET',
    timeout: 5000,
};

const link = 'http://boschxdk.southeastasia.cloudapp.azure.com:8082/v1/ctl/boschxdk11/messages';

const getBoschData = function() {
    fetch(link, options)
    .then(res => {
        if (isSuccess(res.status)) {
            res.json()
            .then(ress => {
                dataHandler(ress);
            })
            .catch(e => {
            });
        } else {
            throw new Error(res.statusText);
        }
    })
    .catch(e => {});
};

module.exports.startPoll = function() {
    getBoschData();
    setInterval(getBoschData, 5000);
}

function dataHandler(data) {
    var time = data.updatetime;
    var temperature = parseInt(data.temperature);
    var luminosity = parseInt(data.millilux / 1000);
    var sensorData = { time: time, temperature: temperature, luminosity:luminosity };
    state.sensorData = sensorData;
    console.log(state.sensorData);
}
