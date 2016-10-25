var _ = require('lodash');

var configuration = require('./configure');
// var api = require('./api');

module.exports = function () {

    function configure(options) {
        configuration.default_options = _.merge(configuration.default_options, options);
    }

    return {
        version: configuration.sdkVersion,
        configure: configure,
        configuration: configuration.default_options,
        shop: require('./resources/shop')(),
    };
};
