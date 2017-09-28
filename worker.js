const redisClient = require('redis').createClient(process.env.REDIS_URL);
const PubNub = require("pubnub")
const pubnub = new PubNub({
    'ssl': true,   
    'publishKey': process.env.PUBNUB_PUBLISH_KEY,
    'subscribeKey': process.env.PUBNUB_SUBSCRIBE_KEY
});

pubnub.addListener({
    'message': (msg) => {
        console.log(`worker.js received message`, msg);
        redisClient.set('uuid', msg.message, (err, reply) => {
            console.log('saved value in redis')
        })
    }
})
pubnub.subscribe({
    channels: ["hello_world"]
});
