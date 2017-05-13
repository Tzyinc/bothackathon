module.exports.getStatus = function(req, res) {
    const uid = req.params.aircon_id;
    const content = uid == 1 ? 'OFF' : 'ON';
    res.send(content);
}
