const express = require('express')
const app = express()
const bot = require('./mainbot/bot')

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(process.env.PORT, () => {
bot;
console.log('Example app listening on port 3000!')
});