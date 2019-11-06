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

const LIST_TASKS_PATH = '../views/listTasks.ejs'

app.get('/listTasks', function (req, res) {
    res.render(LIST_TASKS_PATH)
})

module.exports.app = app