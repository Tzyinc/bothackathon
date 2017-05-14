module.exports.getStatus = function(req, res) {
    const uid = req.params.aircon_id;
    const rand = Math.random();
    // const content = uid == 1 ? 'OFF' : 'ON';
    const content = 0.8 > rand ? 'OFF' : 'ON';
    res.set("Connection", "close");
    res.send(content);
}
