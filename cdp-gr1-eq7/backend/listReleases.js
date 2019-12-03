/* CONFIG */
const express = require('express')
const app = express()

/* REQUIRED */
const path = require('path')
const bodyParser = require('body-parser')
const db = require('./db_connection')
const session = require('express-session')
const GitHub = require('github-api')
const githublogin = require('./gitHubLogin')
const modifyDoc = require('./modifyDoc')
const modifySprintOfRelease = require('./modifySprintOfRelease')
const Markdown = require('markdown-it')

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
app.use(githublogin.app)
app.use(modifyDoc.app)
app.use(modifySprintOfRelease.app)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './..', '/views'))

const SET_GITHUB_ROUTE = '/setGitHub'

const LIST_RELEASE_ROUTE = '/listReleases'
const REMOVE_RELEASE_ROUTE = '/removeRelease'

const LIST_RELEASE_VIEW_PATH = '../views/listReleases'

let git = new GitHub('', '')
let repo
let listReleases = []
let listDoc = []
let listSprints = []

let projectId
let project
let userGitHub
let repositoryGitHub
let sess

/* FUNCTIONS */

function renderDescription(release) {
  const md = new Markdown()
  return md.render(release.body)
}

app.get(LIST_RELEASE_ROUTE, function(req, res) {
  projectId = req.query.projectId
  sess = req.session

  listReleases = []
  listDoc = []
  listSprints = []

  userGitHub = ''
  repositoryGitHub = ''

  db._getProjectFromProjectId(projectId).then(p => {
    if (
      sess.usernameGitHub !== undefined &&
      sess.passwordGitHub !== undefined
    ) {
      git = new GitHub({
        username: sess.usernameGitHub,
        password: sess.passwordGitHub
      })
    }
    project = p
    repo = git.getRepo(project.userGitHub, project.repositoryGitHub)
    userGitHub = project.userGitHub
    repositoryGitHub = project.repositoryGitHub

    sess.userGitHub = userGitHub
    sess.repositoryGitHub = repositoryGitHub
    req.session = sess

    repo
      .listReleases(null)
      .then(list => {
        listReleases = list.data

        db._getAllSprintFromProject(projectId).then(sprints => {
          listSprints = sprints
          db._getDocsFromReleases(listReleases).then(result => {
            listDoc = result
            res.render(LIST_RELEASE_VIEW_PATH, {
              session: sess,
              listReleases: listReleases,
              project: sess.project,
              listSprints: listSprints,
              listDoc: listDoc,
              renderDescription: renderDescription
            })
          })
        })
      })
      .catch(list => {
        res.render(LIST_RELEASE_VIEW_PATH, {
          session: sess,
          listReleases: listReleases,
          project: sess.project,
          listProjects: sess.listProjects,
          listSprints: listSprints,
          listDoc: listDoc,
          renderDescription: renderDescription
        })
      })
  })
})

app.post(REMOVE_RELEASE_ROUTE, function(req, res) {
  const releaseIdToRemove = req.body.releaseIdToRemove
  repo = git.getRepo(project.userGitHub, project.repositoryGitHub)

  db._deleteDoc(releaseIdToRemove)
  repo.deleteRelease(releaseIdToRemove)

  res.redirect('back')
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
