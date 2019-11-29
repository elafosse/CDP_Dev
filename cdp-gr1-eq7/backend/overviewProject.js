/* CONFIG */
const express = require('express')
const app = express()

/* REQUIRED */
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const db = require('./db_connection')

/* USE THE REQUIRES */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(
  session({
    secret: 'shhhhhhared-secret',
    saveUninitialized: true,
    resave: true
  })
)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './..', '/views'))

const PROJECT_OVERVIEW_ROUTE = '/overviewProject'
/*
const LIST_ISSUES_ROUTE = '/listIssues'
const LIST_TASKS_ROUTE = '/listTasks'
const LIST_SPRINTS_ROUTE = '/listSprints'
const MODIFY_ISSUE_REDIRECT_URL = '/listIssues?projectId='
*/

const PROJECT_OVERVIEW_VIEW_PATH = '../views/overviewProject'

function getIssueState(taskStatus) {
  if (taskStatus === undefined) {
    return 4
  }
  if (!taskStatus.total) {
    return 4
  }
  if (taskStatus.totalDoing || (taskStatus.totalToDo && taskStatus.totalDone)) {
    return 2
  }
  if (taskStatus.totalToDo) {
    return 3
  }
  if (taskStatus.totalDone === taskStatus.total) {
    return 1
  }
  return 4
}

let projectId
let listProjects = []
let sess
let projectIssuesSummary = [0, 0, 0, 0, 0]
let sprintIssuesSummary = [0, 0, 0, 0, 0]
let sprintTasksSummary = [0, 0, 0, 0]

let promiseList = []

app.get(PROJECT_OVERVIEW_ROUTE, function(req, res) {
  projectId = req.query.projectId
  projectIssuesSummary = [0, 0, 0, 0, 0]
  sprintIssuesSummary = [0, 0, 0, 0, 0]
  sprintTasksSummary = [0, 0, 0, 0]
  promiseList = []
  sprintIssuesId = []

  let promiseProjectInfo = db
    ._getProjectFromProjectId(projectId)
    .then(project => {
      projectId = req.query.projectId

      listProjects = []
      sess = req.session
      sess.project = project

      db._getProjectsOfMember(sess.username).then(listProjectsMembers => {
        listProjectsMembers.forEach(element => {
          listProjects.push(element)
        })
      })
    })
  promiseList.push(promiseProjectInfo)

  let promiseProjectIssuesCount = db
    ._getCountIssuesProject(projectId)
    .then(count => {
      projectIssuesSummary[0] = count[0].total
    })
  promiseList.push(promiseProjectIssuesCount)

  let promiseGetAllSprintIssues = db
    ._getCurrentSprint(projectId)
    .then(sprintId => {
      if (sprintId.length) {
        db._getIssuesIdsOfSprint(sprintId[0].id).then(issues => {
          sprintIssuesId = Array.from(issues)
        })
      }
    })
  promiseList.push(promiseGetAllSprintIssues)

  let promiseProjectIssuesState = db
    ._getAllProjectIssues(projectId)
    .then(issues => {
      promiseList.push(
        new Promise((resolve, reject) => {
          issues.forEach((issue, index, array) => {
            db._getCountTasksStatesFromIssues(issue.id).then(result => {
              let status = getIssueState(result[0])
              ++projectIssuesSummary[status]
              if (sprintIssuesId.length) {
                if (sprintIssuesId.includes(issue.id)) {
                  ++sprintIssuesSummary[status]
                  sprintTasksSummary[0] += result[0].total
                  sprintTasksSummary[1] += result[0].totalDone
                  sprintTasksSummary[2] += result[0].totalDoing
                  sprintTasksSummary[3] += result[0].totalToDo
                }
              }
            })
            if (index === array.length - 1) resolve()
          })
        })
      )
    })
  promiseList.push(promiseProjectIssuesState)

  let promiseSprintIssuesCount = db
    ._getCountIssuesLastSprint(projectId)
    .then(count => {
      sprintIssuesSummary[0] = count[0].total
    })
  promiseList.push(promiseSprintIssuesCount)

  Promise.all(promiseList).then(() => {
    sess.listProjects = listProjects
    res.render(PROJECT_OVERVIEW_VIEW_PATH, {
      session: req.session,
      project: sess.project,
      projectId: projectId,
      listProjects: sess.listProjects,
      projectIssuesSummary: projectIssuesSummary,
      sprintIssuesSummary: sprintIssuesSummary,
      sprintTasksSummary: sprintTasksSummary
    })
  })
})

module.exports.app = app
