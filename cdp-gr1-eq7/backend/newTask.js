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

const NEW_TASK_PATH = '../views/newTask.ejs'

let sess

let listIssues
let listProjectMembers
let listProjectTasks

app.get('/newTask', function(req, res) {
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
        res.render(NEW_TASK_PATH, {
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
  // TODO : Pourquoi ça redirige sur listIssues sérieux ?!
  db._addTask(
    req.query.projectId,
    req.body.taskName,
    req.body.taskDescription,
    req.body.taskState,
    req.body.startDate,
    req.body.taskDuration,
    req.body.taskDoD,
    req.body.taskMember,
    req.body.taskMember,
    req.body.taskRequired,
    req.body.taskIssue
  ).then(res.redirect('/listTasks?projectId='.concat(req.query.projectId)))
})

module.exports.app = app
