var generate = require('../generate');

function orders() {
    var baseURL = '/orders';
    var operations = ['get', 'patch'];

    var ret = {
        baseURL: baseURL,
    };

    ret = generate.mixin(ret, operations);

    return ret;
}

module.exports = orders;
