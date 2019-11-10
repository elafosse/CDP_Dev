/* CONFIG */
const express = require('express')
const app = express()

/* REQUIRED */
const path = require('path')
const ejs = require('ejs')
let bodyParser = require('body-parser')
const session = require('express-session')
const db = require('./db_connection')

/* USE THE REQUIRES */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({secret: 'shhhhhhared-secret', saveUninitialized: true,resave: true}))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './..', '/views'))

const SIGNUP_ROUTE = '/signUp'
const SIGNUP_VIEW_PATH = '../views/signUp'
const SIGNIN_VIEW_PATH = '../views/signIn'
const STORE_USER = '/signUp'

app.get(SIGNUP_ROUTE, function (req, res) {
  res.render(SIGNUP_VIEW_PATH);
})

app.post(STORE_USER, function (req, res) {
  let username = req.body.username;
  let password = req.body.password;
  let confirmedPassword = req.body.confirmedPassword;
  
  if (password == confirmedPassword) {
    console.log(username)
    db._isUsernameAvailable(username).then(isAvailable =>{
      console.log(isAvailable)
      if (isAvailable){
        db._storeMember(username, password).then(() =>{
          res.render(SIGNIN_VIEW_PATH)
        })
      }
      else {
        console.log('Username already used')
      }
    })
    console.log("Same");
  }
  else {
    console.log("Not same");
  }
})


module.exports.app = app