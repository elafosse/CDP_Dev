/* CONFIG */
const express = require('express')
const app = express()

const path = require('path')
const ejs = require('ejs')
let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './..', '/frontend'))

const INDEX_PATH = '../frontend/index'

app.get('/', function(req, res){
  res.render(INDEX_PATH)
})

module.exports.app = app
