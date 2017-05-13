const getR = () => {
    return 15;
}

const getG = () => {
    return 15;
}

const getB = () => {
    return 15;
}

module.exports.getStatus = function(req, res) {
    const uid = req.params.lights_id;
    // const state = require('state');
    let content;
    switch (uid) {
        case '1':
            content = getR();
            break;
        case '2':
            content = getG();
            break;
        case '3':
            content = getB();
            break
        default:
            content = 0;
    }
    res.set("Connection", "close");
    res.send('' + content);
}
