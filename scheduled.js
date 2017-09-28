const pubnub = require("pubnub")({
    'ssl': true,  // <- enable TLS Tunneling over TCP
    'publish_key': process.env.PUBNUB_PUBLISH_KEY
});
const uuidv1 = require('uuid/v1')

pubnub.publish({
    'channel': 'hello_world',
    'message': uuidv1(),
    callback  : function(e) { console.log( "scheduled.js sent message!", e ); },
    error     : function(e) { console.log( "scheduled.js failed to send message!", e ); }
})
