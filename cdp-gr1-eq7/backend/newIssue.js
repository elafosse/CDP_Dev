/* CONFIG */
const express = require('express')
const app = express()

/* REQUIRED */
const path = require('path')
const bodyParser = require('body-parser')
const db = require('./db_connection')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('../public')) // Mettre l'URL du dossier 'public' par rapport a initApp.js

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './..', '/views'))

const NEW_ISSUE_ROUTE = '/newIssue'
const CREATE_ISSUE_ROUTE = '/createIssue'

const NEW_ISSUE_VIEW_PATH = '../views/newIssue'

const LIST_ISSUES_REDIRECT_URL = '/listIssues?projectId='

let projectId
let sess

app.get(NEW_ISSUE_ROUTE, function(req, res) {
  projectId = req.query.projectId
  sess = req.session
  db._getProjectFromProjectId(projectId).then(currentProject => {
    res.render(NEW_ISSUE_VIEW_PATH, {
      session: sess,
      project: sess.project,
      projectId: projectId
    })
  })
})

app.post(CREATE_ISSUE_ROUTE, function(req, res) {
  const issueName = req.body.issueName
  const issueDescription = req.body.issueDescription
  const issuePriority = req.body.issuePriority
  const issueDifficulty = req.body.issueDifficulty
  console.log('Issue ' + issueName + ' created')

  db._addIssueToProject(
    projectId,
    issueName,
    issueDescription,
    issuePriority,
    issueDifficulty
  )

  res.redirect(LIST_ISSUES_REDIRECT_URL + projectId)
})

module.exports.app = app
