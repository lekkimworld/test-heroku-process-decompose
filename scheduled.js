const PubNub = require("pubnub")
const pubnub = new PubNub({
    'ssl': true,  // <- enable TLS Tunneling over TCP
    'publishKey': process.env.PUBNUB_PUBLISH_KEY,
    'subscribeKey': process.env.PUBNUB_SUBSCRIBE_KEY
});
const uuidv1 = require('uuid/v1')

let msg = uuidv1()
console.log(`Message: ${msg}`)
pubnub.publish({
    'channel': 'hello_world',
    'message': msg
}, (status, response) => {
    console.log(status, response)
})
