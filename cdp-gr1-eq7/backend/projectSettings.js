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
app.use(express.static('../public'))
app.use(
  session({
    secret: 'shhhhhhared-secret',
    saveUninitialized: true,
    resave: true
  })
)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './..', '/views'))

const PROJECT_SETTINGS_ROUTE = '/projectSettings'
const ADD_MEMBER_ROUTE = '/addMemberSettings'
const REMOVE_MEMBER_ROUTE = '/removeMemberSettings'
const UPDATE_PROJECT_ROUTE = '/projectSettings'

const PROJECT_SETTINGS_VIEW_PATH = '../views/projectSettings'
const PROJECT_OVERVIEW_VIEW_PATH = '../views/overviewProject'

const DEFAULT_GITHUB = ''

/* FUNCTIONS */
let sess
let project
let projectId
let oldMembers = []
let newMembers = []
let areAdmins = []
let creatorUsername = DEFAULT_GITHUB
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

app.get(PROJECT_SETTINGS_ROUTE, function(req, res) {
  projectId = req.query.projectId
  sess = req.session

  oldMembers = []
  newMembers = []
  areAdmins = []

  db._getProjectFromProjectId(projectId).then(p => {
    project = p
    projectName = project.name
    projectDescription = project.description
    userGitHub = project.userGitHub
    repositoryGitHub = project.repositoryGitHub

    db._getMembersOfProject(projectId).then(members => {
      oldMembers = members
      db._deleteMembersFromProject(projectId, oldMembers).then(resul => {
        creatorUsername = members.pop()
        newMembers = oldMembers
        res.render(PROJECT_SETTINGS_VIEW_PATH, {
          projectName: projectName,
          projectDescription: projectDescription,
          userGitHub: userGitHub,
          repositoryGitHub: repositoryGitHub,
          project: sess.project,
          session: sess,
          listMembers: newMembers
        })
      })
    })
  })
})

app.post(ADD_MEMBER_ROUTE, function(req, res) {
  projectName = req.body.projectName
  projectDescription = req.body.projectDescription
  userGitHub = req.body.userGitHub
  repositoryGitHub = req.body.repositoryGitHub
  const memberUsernameToAdd = req.body.memberUsernameToAdd
  console.log('Added member ' + memberUsernameToAdd)

  newMembers.push(memberUsernameToAdd)
  res.render(PROJECT_SETTINGS_VIEW_PATH, {
    projectName: projectName,
    projectDescription: projectDescription,
    userGitHub: userGitHub,
    repositoryGitHub: repositoryGitHub,
    project: sess.project,
    session: sess,
    listMembers: newMembers
  })
})

app.post(REMOVE_MEMBER_ROUTE, function(req, res) {
  projectName = req.body.projectName
  projectDescription = req.body.projectDescription
  userGitHub = req.body.userGitHub
  repositoryGitHub = req.body.repositoryGitHub
  const memberUsernameToRemove = req.body.memberUsernameToRemove
  console.log('Removed member ' + memberUsernameToRemove)

  removeMember(memberUsernameToRemove, newMembers)
  res.render(PROJECT_SETTINGS_VIEW_PATH, {
    projectName: projectName,
    projectDescription: projectDescription,
    userGitHub: userGitHub,
    repositoryGitHub: repositoryGitHub,
    project: sess.project,
    session: sess,
    listMembers: newMembers
  })
})

app.post(UPDATE_PROJECT_ROUTE, function(req, res) {
  projectName = req.body.projectName
  projectDescription = req.body.projectDescription
  userGitHub = req.body.userGitHub
  repositoryGitHub = req.body.repositoryGitHub

  console.log('Project ' + projectName + ' updated')

  for (i = 0; i < newMembers.length; i++) {
    areAdmins.push(0)
  }

  newMembers.push(creatorUsername)
  areAdmins.push(1)

  db._modifyProject(
    projectId,
    projectName,
    projectDescription,
    userGitHub,
    repositoryGitHub
  ).then(p => {
    db._inviteMembersToProject(projectId, newMembers, areAdmins).then(
      db._getProjectFromProjectId(projectId).then(updatedProject => {
        res.render(PROJECT_OVERVIEW_VIEW_PATH, {
          session: sess,
          project: updatedProject,
          projectId: projectId
        })
      })
    )
  })
})

module.exports.app = app
