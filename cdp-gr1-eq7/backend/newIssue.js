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

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './..', '/views'))

const NEW_ISSUE_ROUTE = '/newIssue'
const CREATE_ISSUE_ROUTE = '/createIssue'

const NEW_ISSUE_VIEW_PATH = '../views/newIssue'

const MODIFY_ISSUE_REDIRECT_URL = '/listIssues?projectId='

let projectId

app.get (NEW_ISSUE_ROUTE, function (req, res){
  projectId = req.query.projectId
  
  db._getProjectFromProjectId(projectId).then(currentProject =>{
    res.render (NEW_ISSUE_VIEW_PATH, {
      session: session,
      projectId: projectId
    })
  })
})

app.post(CREATE_ISSUE_ROUTE, function(req, res){
  const issueName = req.body.issueName
  const issueDescription = req.body.issueDescription
  const issuePriority = req.body.issuePriority
  const issueDifficulty = req.body.issueDifficulty
  console.log("Issue " + issueName + " created")
  
  db._addIssueToProject(projectId, issueName, issueDescription, issuePriority, issueDifficulty)

  res.redirect(MODIFY_ISSUE_REDIRECT_URL + projectId)
})

module.exports.app = app
