var axios = require('axios');
var request = require('request');

var configuration = require('./configure');

var executeHttp = exports.executeHttp = function executeHttp(http_method, path, data, cb) {

    // if needed, add ...data, config, cb... to attributes, and this
    // if (!config) {
    //     config = configuration.default_options;
    // } else {
    //     config = utils.merge(config, configuration.default_options);
    // }

    var config = configuration.default_options;
    // const baseURL = 'http://epages01.mikko.pri/rs/shops/DemoShop';

    // axios.defaults.headers.common['Accept'] = 'application/vnd.epages.v1+json';
    // axios.defaults.headers.common['Authorization'] = 'Bearer ' + config.token;
    // axios.defaults.headers.common['Content-Type'] = 'application/json';
    // // axios.defaults.headers.common['User-Agent'] = 'developer app';

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

    request.get(options, function (error, response, body) {
        // console.log(error);
        if (!error) {
            console.log(body) // Show the HTML for the Google homepage.
        }
    });

    // axios.get(builtURL)
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });

    console.log("Method: " + http_method);
    console.log("path: " + path);
    console.log("data: " + data);
    // console.log("cb: " + cb);
    // console.log("cb: " + cb);

    // console.log("Execute request");

    // axios the request


    // if success
        // cb(error, response);

};
