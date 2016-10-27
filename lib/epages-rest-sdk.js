var _ = require('lodash');

var configuration = require('./configure');
// var api = require('./api');

function configure(options) {
    configuration.default_options = _.merge(configuration.default_options, options);
}

class ePages {
    constructor() {
        this.version = configuration.sdkVersion;
        this.configuration = configuration.default_options;

        this.shop = require('./resources/shop');
    }

    configure(options) {
        this.configuration = _.merge(this.default_options, options);
    }
}

const epages_rest_sdk = function () {

    function configure(options) {
        configuration.default_options = _.merge(configuration.default_options, options);
    }

    return {
        version: configuration.sdkVersion,
        configure: configure,
        configuration: configuration.default_options,
        shop: require('./resources/shop'), // exports new Shop class
        orders: require('./resources/orders')(),
    };
};

module.exports = new ePages;
