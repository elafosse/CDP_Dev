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

const SIGNIN_ROUTE = '/signIn'
const SIGNIN_VIEW_PATH = '../views/signIn'
const CONNECT_USER = '/signIn'

app.get(SIGNIN_ROUTE, function (req, res) {
    res.render(SIGNIN_VIEW_PATH);
})

app.post(CONNECT_USER, function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
})


module.exports.app = app