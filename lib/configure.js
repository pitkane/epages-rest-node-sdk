"use strict";

var sdkVersion = exports.sdkVersion = require('../package').version;

var default_options = exports.default_options = {
    'mode': 'sandbox', // or live
    'schema': 'https', // or http
    'host': '',
    'port': '',
    'userAgent': 'ePages-rest-node-sdk ' + sdkVersion + ' (node ' + process.version + '-' + process.arch + '-' + process.platform  + '; OpenSSL ' + process.versions.openssl + ')',
    'headers': {}
};
