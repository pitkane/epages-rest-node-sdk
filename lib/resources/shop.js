const BaseClass = require('../BaseClass.js');

class Shop extends BaseClass {
    constructor() {
        const baseURL = "/";
        const operations = ['get'];
        super(baseURL, operations);
    }
}

module.exports = new Shop;
