/* CONFIG */
const express = require('express')
const app = express()

/* REQUIRED */
const path = require('path')
const bodyParser = require('body-parser')
const db = require('./db_connection')

/* USE THE REQUIRES */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('../public')) // Mettre l'URL du dossier 'public' par rapport a initApp.js

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './..', '/views'))

const TASK_PATH = '../views/newTask.ejs'

let sess

let listIssues
let listProjectMembers
let listProjectTasks

let action

function turnToArray(data) {
  if (data === undefined) {
    data = []
  } else if (!Array.isArray(data)) {
    data = [data]
  }
  return data
}

app.get('/newTask', function(req, res) {
  action = 'create'
  listIssues = []
  listProjectMembers = []
  listProjectTasks = []
  sess = req.session

  db._getAllProjectIssues(req.query.projectId).then(result => {
    listIssues = result
    db._getMembersOfProject(req.query.projectId).then(result => {
      listProjectMembers = result
      db._getAllTasksOfProject(req.query.projectId).then(result => {
        listProjectTasks = result
        res.render(TASK_PATH, {
          action: action,
          listIssues: listIssues,
          listProjectMembers: listProjectMembers,
          listProjectTasks: listProjectTasks,
          projectId: req.query.projectId,
          session: sess,
          project: sess.project,
          listProjects: sess.listProjects
        })
      })
    })
  })
})

app.post('/newTask', function(req, res) {
  let issues = turnToArray(req.body.taskIssue)
  let taskRequired = turnToArray(req.body.taskRequired)
  let taskMember = turnToArray(req.body.taskMember)
  db._addTask(
    req.query.projectId,
    req.body.taskName,
    req.body.taskDescription,
    req.body.taskState,
    req.body.startDate,
    req.body.taskDuration,
    req.body.taskDoD,
    taskRequired,
    taskMember,
    issues
  ).then(res.redirect('/listTasks?projectId='.concat(req.query.projectId)))
})

app.get('/modifyTask', function(req, res) {
  let task
  action = 'modify'

  listIssues = []
  listProjectMembers = []
  listProjectTasks = []
  sess = req.session

  db._getTaskById(req.query.taskId).then(result => {
    task = result
    db._getAllProjectIssues(req.query.projectId).then(result => {
      listIssues = result
      db._getMembersOfProject(req.query.projectId).then(result => {
        listProjectMembers = result
        db._getAllTasksOfProject(req.query.projectId).then(result => {
          listProjectTasks = result
          res.render(TASK_PATH, {
            action: action,
            task: task,
            listIssues: listIssues,
            listProjectMembers: listProjectMembers,
            listProjectTasks: listProjectTasks,
            projectId: req.query.projectId,
            session: sess,
            project: sess.project,
            listProjects: sess.listProjects
          })
        })
      })
    })
  })
})

app.post('/modifyTask', function(req, res) {
  let issues = turnToArray(req.body.taskIssue)
  let taskRequired = turnToArray(req.body.taskRequired)
  let taskMember = turnToArray(req.body.taskMember)

  db._modifyTask(
    req.query.taskId,
    req.body.taskName,
    req.body.taskDescription,
    req.body.taskState,
    req.body.startDate,
    req.body.taskDuration,
    req.body.taskDoD
  ).then(() => {
    db._setTaskToIssue(req.query.taskId, issues).then(() => {
      db._setTaskDependencies(req.query.taskId, taskRequired).then(() => {
        db._setTaskToMembers(req.query.taskId, taskMember).then(() => {
          res.redirect('/listTasks?projectId='.concat(req.query.projectId))
        })
      })
    })
  })
})

module.exports.app = app
