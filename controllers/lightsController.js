module.exports.getStatus = function(req, res) {
    const uid = req.params.lights_id;
    // const state = require('state');
    const content = uid == 1 ? 255 : 150; 
    res.send('' + content);
}
