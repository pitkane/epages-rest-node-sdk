var Promise = require('bluebird');
var epages = require('../index');
// epages = Promise.promisifyAll(epages);

epages.configure({
  'schema': 'http',
  'shop_host': 'epages01.mikko.pri',
  'shop_name': 'DemoShop',
  'token': 'oddsVYIR0BY1sGTZoFmLthZzA66kykhS',
});

// console.log(epages)

epages.shop.get()
    .then( function(data) {
        console.log("Got Shop");
        // console.log("Error: " + error);
        console.log("Response: " + data);
        // console.log(JSON.stringify(data));
    })
//
// function wait () {
//    if (true) {
//        console.log("asdf")
//         setTimeout(wait, 1000);
//     }
// };
// wait();
