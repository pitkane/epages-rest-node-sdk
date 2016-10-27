const api = require('./api');

class BaseClass {
    constructor(baseURL, operations) {
        this.baseURL = baseURL;
        baseURL = baseURL;

        this.get = function (data) {
                return new Promise(function (resolve, reject) {
                    // var baseURL = "/";
                    // console.log(this);
                    api.executeHttp('GET', baseURL, data)
                        .then(function(data) {
                            resolve(data);
                        });
                });
            };
        // this.get = restFunctions['get'];
        //
        // operations.forEach(function (property) {
        //     this.get = restFunctions[property];
        // });
    }
}

// function buildMethods(operations, baseURL) {
//
// }

const restFunctions = {
    get: function get(data) {
            return new Promise(function (resolve, reject) {
                // var baseURL = "/";
                // console.log(this);
                api.executeHttp('GET', this.baseURL, data)
                    .then(function(data) {
                        resolve(data);
                    });
            });
    }
}

module.exports = BaseClass;
