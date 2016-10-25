var generate = require('../generate');
// var api = require('../api');

function shop() {
    var baseURL = '/';
    var operations = ['get'];

    var ret = {
        baseURL: baseURL,
    };

    ret = generate.mixin(ret, operations);
    return ret;
}

module.exports = shop;
