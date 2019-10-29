/* CONFIG */
const express = require('express')
const app = express()

/* REQUIRED */
const path = require('path')
const ejs = require('ejs')
let bodyParser = require('body-parser')
const mysql = require('mysql')
const index = require('./index')

/* USE THE REQUIRES */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(index.app)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './..', '/frontend'))

const NUM_PORT = 3000

app.listen(NUM_PORT, function () {
  console.log('App listening on port ' + NUM_PORT + '!')
})
