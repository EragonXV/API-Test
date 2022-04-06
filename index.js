const PORT = 80
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    console.log(req.body)
    res.send()
})

app.get('/response', (req, res) => {

})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))