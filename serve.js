const redisClient = require('redis').createClient(process.env.REDIS_URL);
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    let arr = redisClient.get('array') || []
    res.send(arr.join(','))
})
