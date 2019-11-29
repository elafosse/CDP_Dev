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

const NEW_PROJECT_ROUTE = '/newProject'
const ADD_MEMBER_ROUTE = '/addMember'
const REMOVE_MEMBER_ROUTE = '/removeMember'
const CREATE_PROJECT_ROUTE = '/createProject'

const NEW_PROJECT_VIEW_PATH = '../views/newProject'

const PROJECT_OVERVIEW_REDIRECT_URL = '/overviewProject?projectId='

const DEFAULT_GITHUB = ''

/* FUNCTIONS */
let sess

let listMembers = []
let areAdmins = []
let projectName = DEFAULT_GITHUB
let projectDescription = DEFAULT_GITHUB
let userGitHub = DEFAULT_GITHUB
let repositoryGitHub = DEFAULT_GITHUB

function removeMember(username, listMembers) {
  listMembers.forEach(member => {
    if (member === username) {
      let index = listMembers.indexOf(member)
      listMembers.splice(index, 1)
    }
  })
}

app.get(NEW_PROJECT_ROUTE, function(req, res) {
  listMembers = []
  areAdmins = []
  projectName = DEFAULT_GITHUB
  projectDescription = DEFAULT_GITHUB
  userGitHub = DEFAULT_GITHUB
  repositoryGitHub = DEFAULT_GITHUB
  sess = req.session

  res.render(NEW_PROJECT_VIEW_PATH, {
    projectName: projectName,
    projectDescription: projectDescription,
    userGitHub: userGitHub,
    repositoryGitHub: repositoryGitHub,
    session: sess,
    listMembers: listMembers
  })
})

app.post(ADD_MEMBER_ROUTE, function(req, res) {
  projectName = req.body.projectName
  projectDescription = req.body.projectDescription
  userGitHub = req.body.userGitHub
  repositoryGitHub = req.body.repositoryGitHub
  const memberUsernameToAdd = req.body.memberUsernameToAdd
  console.log('Added member ' + memberUsernameToAdd)

  listMembers.push(memberUsernameToAdd)
  res.render(NEW_PROJECT_VIEW_PATH, {
    projectName: projectName,
    projectDescription: projectDescription,
    userGitHub: userGitHub,
    repositoryGitHub: repositoryGitHub,
    session: sess,
    listMembers: listMembers
  })
})

app.post(REMOVE_MEMBER_ROUTE, function(req, res) {
  projectName = req.body.projectName
  projectDescription = req.body.projectDescription
  userGitHub = req.body.userGitHub
  repositoryGitHub = req.body.repositoryGitHub
  const memberUsernameToRemove = req.body.memberUsernameToRemove
  console.log('Removed member ' + memberUsernameToRemove)

  removeMember(memberUsernameToRemove, listMembers)
  res.render(NEW_PROJECT_VIEW_PATH, {
    projectName: projectName,
    projectDescription: projectDescription,
    userGitHub: userGitHub,
    repositoryGitHub: repositoryGitHub,
    session: sess,
    listMembers: listMembers
  })
})

app.post(CREATE_PROJECT_ROUTE, function(req, res) {
  projectName = req.body.projectName
  projectDescription = req.body.projectDescription
  userGitHub = req.body.userGitHub
  repositoryGitHub = req.body.repositoryGitHub
  console.log('Project ' + projectName + ' created')

  for (i = 0; i < listMembers.length; i++) {
    areAdmins.push(0)
  }

  listMembers.push(sess.username)
  areAdmins.push(1)

  db._createProject(
    projectName,
    projectDescription,
    userGitHub,
    repositoryGitHub
  ).then(projectId => {
    db._inviteMembersToProject(projectId, listMembers, areAdmins).then(
      db._getProjectFromProjectId(projectId).then(newProject => {
        sess.project = newProject
        req.session = sess
        res.redirect(PROJECT_OVERVIEW_REDIRECT_URL + projectId)
      })
    )
  })
})

module.exports.app = app
