var axios = require('axios');
var request = require('request');

var configuration = require('./configure');

exports.executeHttp = function executeHttp(http_method, path, data, cb) {

    var config = configuration.default_options;
    // console.log(config);

    var builtURL = config.schema + '://' + config.shop_host + '/rs/shops/' + config.shop_name + path;

    console.log(builtURL);

    var options = {
        url: builtURL,
        headers: {
            'Accept': 'application/vnd.epages.v1+json',
            'Authorization': 'Bearer ' + config.token,
            'Content-Type': 'application/json',
            'User-Agent': 'request'
      }
    };

    return new Promise(function(resolve, reject) {
        request.get(options, function (error, response, body) {
            if (error) {
                // console.log("Got error: " + error);
                reject(error);
            } else {
                resolve(body);
            }
        });
    });

};
