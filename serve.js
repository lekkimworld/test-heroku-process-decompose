const redisClient = require('redis').createClient(process.env.REDIS_URL);
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    redisClient.get('uuid', (err, uuid) => {
        if (err) {
            res.send(err)
        } else {
            res.send('uuid: ' + uuid)
        }
    })
})

app.listen(process.env.PORT || 8080)
