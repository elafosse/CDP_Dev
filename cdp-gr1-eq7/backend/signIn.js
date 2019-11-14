/* CONFIG */
const express = require('express')
const app = express()

/* REQUIRED */
const session = require('express-session')
const db = require('./db_connection')
const listProjects = require('./listProjects')

/* USE THE REQUIRES */
app.use(session({secret: 'shhhhhhared-secret', saveUninitialized: true,resave: true}))
app.use(listProjects.app)

const SIGNIN_ROUTE = '/signIn'
const SIGNIN_VIEW_PATH = '../views/signIn'
const CONNECT_USER = '/signIn'

app.get(SIGNIN_ROUTE, function (req, res) {
  res.render(SIGNIN_VIEW_PATH);
})

app.post(CONNECT_USER, function (req, res) {
  let username = req.body.username;
  let password = req.body.password;
  
  db._areUsernameAndPasswordCorrect(username, password).then(isCorrect =>{
    if (isCorrect){
      db._getProjectsOfMember(username).then(projects => {
        let sess = req.session
        sess.username = username
        sess.password = password
        res.redirect('./listProjects')
      })
    }
    else{
      console.log('Wrong username/password')
    }
  })
})

module.exports.app = app
