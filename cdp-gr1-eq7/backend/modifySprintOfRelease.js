/* CONFIG */
const express = require('express')
const app = express()

/* REQUIRED */
const path = require('path')
const bodyParser = require('body-parser')
const db = require('./db_connection')
const session = require('express-session')

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

const MODIFY_SPRINT_OF_RELEASE_ROUTE = '/modifySprintOfRelease'

const MODIFY_SPRINT_OF_RELEASE_VIEW_PATH = '../views/modifySprintOfRelease'

const MODIFY_SPRINT_OF_RELEASE_REDIRECT_URL = '/listReleases?projectId='

let releaseId
let projectId
let sess
let listSprints = []

function sprintIdChecked(req, listSprints) {
  let result = -1
  listSprints.forEach(sprint => {
    if (req.body['' + sprint.id] != undefined) {
      result = sprint.id
    }
  })
  return result
}

function linkedToSprintId(releaseId, listSprints) {
  let result = -1
  listSprints.forEach(sprint => {
    if (sprint.release.id === releaseId) {
      console.log(result)
      result = sprint.id
    }
  })
  console.log('end ' + result)
  return result
}

app.get(MODIFY_SPRINT_OF_RELEASE_ROUTE, function(req, res) {
  projectId = req.query.projectId
  releaseId = req.query.releaseId
  sess = req.session

  db._getProjectFromProjectId(projectId).then(p => {
    project = p
    req.session = sess
    db._getAllSprintFromProject(projectId).then(sprints => {
      listSprints = sprints
      res.render(MODIFY_SPRINT_OF_RELEASE_VIEW_PATH, {
        releaseId: releaseId,
        session: sess,
        project: sess.project,
        listSprints: listSprints
      })
    })
  })
})

app.post(MODIFY_SPRINT_OF_RELEASE_ROUTE, function(req, res) {
  const newSprintId = sprintIdChecked(req, listSprints)

  // check if the release already has a sprint
  listSprints.forEach(sprint => {
    if (sprint.release == releaseId) {
      // update the old sprint
      db._updateSprintRelease(sprint.id, -1)
      sprint.release = -1
    }
    // update the new sprint
    if (sprint.id === newSprintId) {
      db._updateSprintRelease(sprint.id, releaseId)
    }
  })

  res.redirect(MODIFY_SPRINT_OF_RELEASE_REDIRECT_URL + projectId)
})

module.exports.app = app
