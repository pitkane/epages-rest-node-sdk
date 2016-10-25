var api = require('./api');

function mixin(destObject, operations) {
    operations.forEach(function (property) {
        destObject[property] = restFunctions[property];
    });
    return destObject;
}

var restFunctions = {
    get: function get(config, cb) {
        api.executeHttp('GET', this.baseURL, {}, config, cb);
    },
    post: function create(data, config, cb) {
        api.executeHttp('POST', this.baseURL, data, config, cb);
    },
    put: function create(data, config, cb) {
        api.executeHttp('PUT', this.baseURL, data, config, cb);
    },
    // list: function list(data, config, cb) {
    //     if (typeof data === 'function') {
    //         config = data;
    //         data = {};
    //     }
    //     api.executeHttp('GET', this.baseURL, data, config, cb);
    // },
    delete: function del(id, config, cb) {
        api.executeHttp('DELETE', this.baseURL + id, {}, config, cb);
    },
    patch: function update(id, data, config, cb) {
        api.executeHttp('PATCH', this.baseURL + id, data, config, cb);
    },
};

module.exports.mixin = mixin;
