/* CONFIG */
const express = require('express')
const app = express()

/* REQUIRED */
const path = require('path')
const bodyParser = require('body-parser')
const db = require('./db_connection')
const session = require('express-session')
const GitHub = require('github-api')

//const modifyRelease = require('./modifyRelease')

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
//app.use(modifyRelease.app)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './..', '/views'))

const SET_GITHUB_ROUTE = '/setGitHub'

const LIST_RELEASE_ROUTE = '/listReleases'
const REMOVE_RELEASE_ROUTE = '/removeRelease'
const CREATE_RELEASE_ROUTE = '/createRelease'

const LIST_RELEASE_VIEW_PATH = '../views/listReleases'

const DEFAULT_STATE = Boolean(true)

const git = new GitHub()
let repo = git.getRepo('', '')
let listReleases = []
let listSprintsRelease = []
let listSprints = []

let projectId
let userGitHub
let repositoryGitHub
let sess

/* FUNCTIONS */

function isChecked(req, listSprints) {
  const result = []
  listSprints.forEach(sprint => {
    if (req.body['' + sprint.id]) {
      result.push(sprint.id)
    }
  })
  return result
}

app.get(LIST_RELEASE_ROUTE, function(req, res) {
  projectId = req.query.projectId
  sess = req.session

  listReleases = []
  listSprintsRelease = []
  listSprints = []

  userGitHub = ''
  repositoryGitHub = ''

  db._getProjectFromProjectId(projectId).then(project => {
    repo = git.getRepo(project.userGitHub, project.repositoryGitHub)

    userGitHub = project.userGitHub
    repositoryGitHub = project.repositoryGitHub

    repo
      .listReleases(null)
      .then(list => {
        listReleases = list.data

        res.render(LIST_RELEASE_VIEW_PATH, {
          session: sess,
          listReleases: listReleases,
          project: sess.project,
          listProjects: sess.listProjects,
          listSprintsRelease: listSprints
        })
      })
      .catch(list => {
        res.render(LIST_RELEASE_VIEW_PATH, {
          session: sess,
          listReleases: listReleases,
          project: sess.project,
          listProjects: sess.listProjects,
          listSprintsRelease: listSprints
        })
      })
  })
})

app.post(REMOVE_RELEASE_ROUTE, function(req, res) {
  const releaseIdToRemove = req.body.releaseIdToRemove
  db._deleteRelease(releaseIdToRemove).then(result => {
    res.redirect('back')
  })
})

app.post(CREATE_RELEASE_ROUTE, function(req, res) {
  const releaseName = req.body.releaseName
  const releaseDescription = req.body.releaseDescription
  const resultExpected = req.body.releaseResultExpected
  const lastVersionValidated = req.body.releaseLastVersionValidated

  listSprintsRelease = isChecked(req, listSprints)

  db._addRelease(
    projectId,
    releaseName,
    releaseDescription,
    resultExpected,
    lastVersionValidated,
    DEFAULT_STATE
  ).then(releaseId => {
    db._setSprintsToRelease(releaseId, listSprintsRelease).then(result => {
      res.redirect('back')
    })
  })
})

app.post(SET_GITHUB_ROUTE, function(req, res) {
  userGitHub = req.body.userGitHub
  repositoryGitHub = req.body.repositoryGitHub

  db._modifyProject(
    projectId,
    sess.project.name,
    sess.project.description,
    userGitHub,
    repositoryGitHub
  ).then(project => {
    res.redirect('back')
  })
})

module.exports.app = app
