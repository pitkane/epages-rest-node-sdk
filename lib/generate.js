const _ = require('lodash');
var api = require('./api');

function mixin(destObject, operations) {
    operations.forEach(function (property) {
        destObject[property] = restFunctions[property];
    });
    return destObject;
}

// function executeHttp(http_method, path, data, cb)

var restFunctions = {
    get: function get(data) {
            if(_.isUndefined(data)) {
                var baseURL = this.baseURL;
            } else {
                var baseURL = this.baseURL + data;
            }
            if (_.isUndefined(data) ) { data = {}; }
            return new Promise( function(resolve, reject) {
                api.executeHttp('GET', baseURL, data);
            });
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