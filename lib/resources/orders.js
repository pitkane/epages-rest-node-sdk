const BaseClass = require('../BaseClass.js');

class Orders extends BaseClass {
    constructor() {
        const baseURL = "/orders";
        const operations = ['get'];
        super(baseURL, operations);
    }
}

module.exports = new Orders;
