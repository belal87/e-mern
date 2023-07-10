const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send('welcome to server')
})
app.get('/product', (req, res)=>{
    res.send("this is product to page")
})

module.exports = app