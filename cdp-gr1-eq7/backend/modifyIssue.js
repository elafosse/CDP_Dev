/* CONFIG */
const express = require('express')
const app = express()

/* REQUIRED */
const path = require('path')
const ejs = require('ejs')
let bodyParser = require('body-parser')
const db = require('./db_connection')
const session = require('express-session')
const project = require('./classes/Project')

/* USE THE REQUIRES */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({secret: 'shhhhhhared-secret', saveUninitialized: true,resave: true}))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './..', '/views'))

const MODIFY_ISSUE_ROUTE = "/modifyIssue"
const MODIFY_ISSUE_VIEW_PATH = "../views/modifyIssue"

let issueId
let projectId
let currentProject

app.get(MODIFY_ISSUE_ROUTE, function(req, res){
  projectId = req.query.projectId
  issueId = req.query.issueId
  
  db._getProjectFromProjectId(projectId).then(result =>{
    currentProject = result

    db._getIssueById(issueId).then(issue =>{
      res.render(MODIFY_ISSUE_VIEW_PATH, {
        project: currentProject,
        sessionUser: req.session,
        issue: issue
      })
    })
  })
})

app.post(MODIFY_ISSUE_ROUTE, function(req, res){
  let newName = req.body.issueName
  let newDescription = req.body.issueDescription
  let newPriority = req.body.issuePriority
  let newDifficulty = req.body.issueDifficulty

  console.log("Issue " + issueId + " modified")

  db._modifyIssue(issueId, newName, newDescription, newPriority, newDifficulty).then(result =>{
    res.redirect('/listIssues?projectId=' + projectId)
  })
})

module.exports.app = app