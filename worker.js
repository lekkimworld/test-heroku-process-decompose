const redisClient = require('redis').createClient(process.env.REDIS_URL);
const pubnub = require("pubnub")({
    'ssl': true,
    'subscribe_key': process.env.PUBNUB_SUBSCRIBE_KEY
});

pubnub.subscribe({
    channel  : "hello_world",
    callback : function(message) {
        console.log(`worker.js received message: ${message}`);
        let arr = redisClient.get('array') || []
        arr.push(message)
        redisClient.set('array', arr)
    }
});
