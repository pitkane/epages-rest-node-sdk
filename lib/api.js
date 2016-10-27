var axios = require('axios');
var request = require('request');

var configuration = require('./configure');

exports.executeHttp = function executeHttp(http_method, path, data, cb) {

    // if needed, add ...data, config, cb... to attributes, and this
    // if (!config) {
    //     config = configuration.default_options;
    // } else {
    //     config = utils.merge(config, configuration.default_options);
    // }

    var config = configuration.default_options;

    var builtURL = config.schema + '://' + config.shop_host + '/rs/shops/' + config.shop_name + path;
    // var instance = axios.create({
    //   baseURL: baseURL,
    // });
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

    // console.log("asdf123")
    return new Promise(function(resolve, reject) {
        request.get(options, function (error, response, body) {
            // console.log(error);
            if (error) {
                console.log("Got error: " + error);
            } else {
                console.log(body);
                resolve(body);
            }
            // cb(body);
            // console.log(response);
            // console.log(body);
            // return body;
        });
    });
    
};
