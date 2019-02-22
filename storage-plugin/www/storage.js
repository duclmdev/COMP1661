var exec = require('cordova/exec');

exports.store = function (arg0, success, error) {
    exec(success, error, 'storage', 'store', [arg0]);
};
