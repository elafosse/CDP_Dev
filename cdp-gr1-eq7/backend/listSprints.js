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

const LIST_SPRINTS_ROUTE = '/listSprints'
const ADD_SPRINT_ROUTE = '/addSprint'
const DELETE_SPRINT_ROUTE = '/deleteSprint'
const MODIFY_SPRINT_ROUTE = '/modifySprint'

const LIST_SPRINTS_VIEW_PATH = '../views/listSprints'
const MODIFY_SPRINTS_VIEW_PATH = '../views/modifySprint'

let projectId
let currentProject
let sess

/* FUNCTIONS */
function getCurrentSprintId(sprints) {
  return new Promise(function(resolve, reject) {
    var today = new Date()
    sprints.forEach(sprint => {
      let sprintBeginDate = new Date(sprint.date_begin)
      let sprintEndDate = new Date(sprint.date_end)
      if (sprintBeginDate <= today && today <= sprintEndDate) {
        resolve(sprint.id)
        return
      }
    })
    resolve(-1)
  })
}

app.get(LIST_SPRINTS_ROUTE, function(req, res) {
  projectId = req.query.projectId
  sess = req.session

  db._getProjectFromProjectId(projectId).then(result => {
    currentProject = result
    db._getAllProjectIssues(projectId).then(projectIssues => {
      db._getAllSprintFromProject(projectId).then(sprints => {
        getCurrentSprintId(sprints).then(currentSprintId => {
          res.render(LIST_SPRINTS_VIEW_PATH, {
            session: sess,
            listSprints: sprints,
            listProjects: sess.listProjects,
            project: currentProject,
            currentSprintId: currentSprintId,
            projectIssues: projectIssues
          })
        })
      })
    })
  })
})

app.post(ADD_SPRINT_ROUTE, function(req, res) {
  const objective = req.body.sprintObjective
  const dateBegin = req.body.date_begin
  const dateEnd = req.body.date_end
  const issueList = req.body.sprintIssue

  db._addSprint(projectId, objective, dateBegin, dateEnd, issueList, -1).then(
    value => {
      res.redirect('back')
    }
  )
})

app.post(DELETE_SPRINT_ROUTE, function(req, res) {
  const sprintId = req.body.sprintId
  db._deleteSprint(sprintId).then(value => {
    res.redirect('back')
  })
})

let sprintIdToModify = -1

app.get(MODIFY_SPRINT_ROUTE, function(req, res) {
  const sprintId = req.query.sprintId
  db._getProjectFromProjectId(projectId).then(result => {
    currentProject = result
    db._getAllProjectIssues(projectId).then(projectIssues => {
      db._getIssuesIdsOfSprint(sprintId).then(sprintIssues => {
        db._getSprintById(sprintId).then(sprint => {
          sprintIdToModify = sprint.id
          res.render(MODIFY_SPRINTS_VIEW_PATH, {
            session: sess,
            sprint: sprint,
            sprintIssues: sprintIssues,
            listProjects: sess.listProjects,
            project: currentProject,
            projectIssues: projectIssues
          })
        })
      })
    })
  })
})

app.post(MODIFY_SPRINT_ROUTE, function(req, res) {
  const sprintId = sprintIdToModify
  const objective = req.body.sprintObjective
  const dateBegin = req.body.date_begin
  const dateEnd = req.body.date_end
  const issueList = req.body.sprintIssue

  db._updateSprint(sprintId, objective, dateBegin, dateEnd, issueList).then(
    value => {
      res.redirect('/listSprints?projectId='.concat(currentProject.id))
    }
  )
})

module.exports.app = app
