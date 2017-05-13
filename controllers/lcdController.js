module.exports.getStatus = function(req, res) {
    const content = 'Hi,BITS_PLEASE  It\'s Sunny Today';

    const r = 255;
    const g = 255;
    const b = 255;

    const rgb = [r, g, b];
    res.set("Connection", "close");
    res.send([content, ...rgb]);
}
