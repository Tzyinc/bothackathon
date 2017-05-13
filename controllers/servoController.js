module.exports.getStatus = function(req, res) {
    const content = uid == 1 ? 'OFF' : 'ON';
    res.send(content);
}
