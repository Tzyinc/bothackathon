const fetch = require('node-fetch');

console.log('gg');

const isSuccess = statusCode => statusCode >= 200 && statusCode < 300;

const options = {
    method: 'GET'
};

const link = 'http://boschxdk.southeastasia.cloudapp.azure.com:8082/v1/ctl/boschxdk11/messages';

const getBoschData = function() {
    console.log('fetching: ' + link);
    fetch(link, options)
    .then(res => {
        if (isSuccess(res.status)) {
            res.json()
            .then(ress => {
                console.log(ress);
            })
            .catch(e => {
            });
        }
        throw new Error(res.statusText);
    })
    .catch(e => {
    });
};

module.exports.startPoll = function() {
    getBoschData();
    setInterval(getBoschData, 2500);
}
