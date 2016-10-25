"use strict";

var configuration = require('./configure');
// var api = require('./api');

module.exports = function () {

    function configure(options) {
        api.configure(options);
    }

    return {
        version: configuration.sdkVersion,
        configure: configure
    };
};
