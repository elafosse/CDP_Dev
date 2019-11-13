/* CONFIG */
const express = require('express')
const app = express()

/* REQUIRED */
const path = require('path')
const ejs = require('ejs')
let bodyParser = require('body-parser')
const session = require('express-session')

/* USE THE REQUIRES */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({secret: 'shhhhhhared-secret', saveUninitialized: true,resave: true}))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './..', '/views'))

const PROJECT_OVERVIEW_ROUTE = '../overviewProject'
const LIST_ISSUES_ROUTE = '/listIssues'
const LIST_TASKS_ROUTE = '/listTasks'

const PROJECT_OVERVIEW_VIEW_PATH = '../views/overviewProject'

const MODIFY_ISSUE_REDIRECT_URL = '/listIssues?projectId='

let projectId

// doesn't work ?????
app.get(PROJECT_OVERVIEW_ROUTE, function (req, res) {
  projectId = req.query.projectId
  db._getProjectFromProjectId(resultId).then(newProject =>{
    projectId = req.query.projectId
    res.render(PROJECT_OVERVIEW_VIEW_PATH, {
      session: req.session,
      project: newProject,
      projectId: resultId
    })
  })
})

// Usefull ???
app.get(LIST_ISSUES_ROUTE, function (req, res) {
  res.redirect(MODIFY_ISSUE_REDIRECT_URL + projectId)
})

module.exports.app = app