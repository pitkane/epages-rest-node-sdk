const _ = require('lodash');
const api = require('./api');
const configuration = require('./configure');

class ePages {
    constructor() {
        this.version = configuration.sdkVersion;
        this.configuration = configuration.default_options;

        this.shop = require('./resources/shop');
        this.orders = require('./resources/orders');
    }

    configure(options) {
        this.configuration = _.merge(this.configuration, options);
    }

    query(method, url) {
        return new Promise(function (resolve, reject) {
            api.executeHttp(method, url )
                .then(function(data) {
                    resolve(data);
                });
        });
    };

}



// const epages_rest_sdk = function () {
//
//     function configure(options) {
//         configuration.default_options = _.merge(configuration.default_options, options);
//     }
//
//     return {
//         // version: configuration.sdkVersion,
//         // configure: configure,
//         // configuration: configuration.default_options,
//         // shop: require('./resources/shop'), // exports new Shop class
//         // orders: require('./resources/orders')(),
//     };
// };

module.exports = new ePages;
