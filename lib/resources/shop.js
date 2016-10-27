// var generate = require('../generate');

const BaseClass = require('../BaseClass.js');

class Shop extends BaseClass {
    constructor() {
        const baseURL = "/";
        const operations = ['get'];
        super(baseURL, operations);
    }
}

module.exports = new Shop;
//
// function shop() {
//     var baseURL = '/';
//     var operations = ['get'];
//
//     var ret = {
//         baseURL: baseURL,
//     };
//
//     ret = generate.mixin(ret, operations);
//
//     return ret;
// }
//
// module.exports = shop;
