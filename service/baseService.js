
const mongoose = require('mongoose');
const Redis = require("ioredis");

module.exports.BaseService = class BaseService{
    constructor() {
        mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
        this.redis = new Redis();
    }

    getRedisClient(){
        return this.redis;
    }
}