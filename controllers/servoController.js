module.exports.getStatus = function(req, res) {
    const content = uid == 1 ? 'OFF' : 'ON';
    res.set("Connection", "close");
    res.send(content);
}
