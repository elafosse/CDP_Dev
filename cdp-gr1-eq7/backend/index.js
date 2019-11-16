/* CONFIG */
const express = require('express')
const app = express()

/* REQUIRED */
const path = require('path')
const ejs = require('ejs')
let bodyParser = require('body-parser')
const mysql = require('mysql')

/* USE THE REQUIRES */
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './..', '/views'))

const INDEX_PATH = '../views/index'
let sess

app.get('/', function(req, res) {
  sess = req.session
  res.render(INDEX_PATH, {
    session: sess
  })
})

module.exports.app = app
