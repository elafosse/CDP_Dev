/* CONFIG */
const express = require('express')
const app = express()

/* REQUIRED */
const path = require('path')
const ejs = require('ejs')
let bodyParser = require('body-parser')
const index = require('./index')
const listProjects = require('./listProjects') // TODO : move to signIn

/* USE THE REQUIRES */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(index.app)
app.use(listProjects.app) // TODO : move to signIn

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './..', '/views'))

const NUM_PORT = 3000

app.listen(NUM_PORT, function () {
  console.log('App listening on port ' + NUM_PORT + '!')
})
