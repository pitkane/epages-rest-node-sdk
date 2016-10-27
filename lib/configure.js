var sdkVersion = exports.sdkVersion = require('../package').version;

var default_options = exports.default_options = {
    'schema': 'https', // or https
    'shop_host': '',
    'shop_name': '',
    'token': '',
    'headers': {
        'Accept': 'application/vnd.epages.v1+json',
        'Content-Type': 'application/json',
        'User-Agent': 'ePages-rest-node-sdk ' + sdkVersion + ' (node ' + process.version + '-' + process.arch + '-' + process.platform  + ')',
    }
};
