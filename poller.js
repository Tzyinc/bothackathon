const fetch = require('node-fetch');

const state = require('./state');
const sensorDataController = require('./controllers/sensorDataController');

const isSuccess = statusCode => statusCode >= 200 && statusCode < 300;

const options = {
    method: 'GET',
    timeout: 500,
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
    setInterval(getBoschData, 10000);
}

function dataHandler(data) {
    var time = data.updatetime;
    console.log(time);
    var temperature = data.temperature;
    var luminosity = data.millilux;
    var sensorData = { time: time, temperature: temperature, luminosity:luminosity };
    sensorDataController.create(sensorData, (err) => {
        console.log("ERROR STORING SENSOR DATA");
    });
    state.sensorData = sensorData;
    console.log(state.sensorData);
}
