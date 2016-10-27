var epages = require('../index');

epages.configure({
  'schema': 'http',
  'shop_host': 'epages01.mikko.pri',
  'shop_name': 'DemoShop',
  'token': 'oddsVYIR0BY1sGTZoFmLthZzA66kykhS',
});

// console.log(epages)

// epages.shop.get()
//     .then( function(data) {
//         console.log("Response: " + data);
//     })
//     .catch(function(err) {
//         console.log(err);
//     });
//
// epages.orders.get()
//     .then( function(data) {
//         console.log("Response: " + data);
//     })
//     .catch(function(err) {
//         console.log(err);
//     });

epages.query('GET', '/products')
    .then(function(data) {
        console.log("Query data: " + data);
    })
    .catch(function(err) {
        console.log("Error: " + err)
    });
