# test-heroku-process-decompose
Simple example app that is decomposed into 3 components:

1. A web process (serve.js) that simply displays a value read from Redis
2. A worker process (worker.js) that receives a message using pubnub and stores the value in Redis
3. A scheduled process (scheduled.js) that can be invoked using Heroku scheduler or Heroku command line to send a message to the worker process using pubnub

# Addons
heroku-redis
pubnub
scheduler
