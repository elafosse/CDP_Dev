/* CONFIG */
const express = require('express')
const app = express()

/* REQUIRED */
const path = require('path')
const bodyParser = require('body-parser')
// const db = require('./db_connection')
const session = require('express-session')

/* USE THE REQUIRES */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('../public')) // Mettre l'URL du dossier 'public' par rapport a initApp.js
app.use(
  session({
    secret: 'shhhhhhared-secret',
    saveUninitialized: true,
    resave: true
  })
)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './..', '/views'))

const LIST_TEST_ROUTE = '/listTests'
const REMOVE_TEST_ROUTE = '/removeTest'

const LIST_TEST_VIEW_PATH = '../views/listTests'

let listTest = []
let projectId
let sess

/* FUNCTIONS */

app.get(LIST_TEST_ROUTE, function(req, res) {
  projectId = req.query.projectId
  sess = req.session

  res.render(LIST_TEST_VIEW_PATH, {
    session: sess,
    listTest: listTest,
    project: sess.project,
    listProjects: sess.listProjects
  })
})

app.post(REMOVE_TEST_ROUTE, function(req, res) {
  /*
  console.log('Removed')
  const issueId = req.body.issueId
  removeIssue(issueId, listIssues)
  db._deleteIssue(issueId)

  res.render(LIST_ISSUES_VIEW_PATH, {
    session: sess,
    listIssues: listIssues,
    projectId: projectId,
    project: currentProject
  }) */
})

module.exports.app = app
