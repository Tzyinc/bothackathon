var preferenceController = require('../controllers/preferenceController');
const state = require('../state');

module.exports.getStatus = function(req, res) {
    const uid = req.params.user_id;

    let data = { name: 'Bob' };

    if (uid == 1) {
        data = { name: 'Alice' };
    }

    preferenceController.read(data, (err, pref) => {
        if (!!pref) {
            state.currentPreference = pref;
            console.log(state.currentPreference);
            res.send('');
        }
    });
}
