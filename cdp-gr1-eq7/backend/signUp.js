const express = require('express')
const app = express()

const path = require('path')
const ejs = require('ejs')
let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('../public')); // Mettre l'URL du dossier 'public' par rapport a initApp.js

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
      db._doesUsernameExists(username).then(userExists => {
      if (!userExists){
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
