/* CONFIG */
const express = require('express')
const app = express()

/* REQUIRED */
const path = require('path')
const bodyParser = require('body-parser')
const db = require('./db_connection')
const session = require('express-session')

const modifyTest = require('./modifyTest')

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
app.use(modifyTest.app)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './..', '/views'))

const LIST_TEST_ROUTE = '/listTests'
const REMOVE_TEST_ROUTE = '/removeTest'
const CREATE_TEST_ROUTE = '/createTest'

const LIST_TEST_VIEW_PATH = '../views/listTests'

const DEFAULT_STATE = 'todo'

let listTests = []
let listIssuesTest = []
let listIssues = []

/* TESTS ZONE */
const test = require('./classes/Test')
const issue = require('./classes/Issue')
const i1 = new issue.Issue('id1', 'i1', '1', 'id1', '1', '1')
const i2 = new issue.Issue('id2', 'i2', '1', 'id2', '1', '1')
const i3 = new issue.Issue('id3', 'i3', '1', 'id3', '1', '1')

listIssues.push(i1)
listIssues.push(i2)
listIssues.push(i3)

const t1 = new test.Test(
  'id1',
  'projectId',
  't1',
  'test 1',
  're 1',
  'v 0.0.1',
  'todo',
  []
)
const t2 = new test.Test(
  'id2',
  'projectId',
  't2',
  'test 2',
  're 2',
  'v 0.0.1',
  'todo',
  []
)
const t3 = new test.Test(
  'id3',
  'projectId',
  't3',
  'test 3',
  're 3',
  'v 0.0.1',
  'failed',
  listIssuesTest
)
listTests.push(t1)
listTests.push(t2)
listTests.push(t3)

let projectId
let sess

/* FUNCTIONS */

function isChecked(req, listIssues) {
  let result = []
  listIssues.forEach(issue => {
    if (req.body['' + issue.id]) {
      result.push(issue.id)
    }
  })
  return result
}

app.get(LIST_TEST_ROUTE, function(req, res) {
  projectId = req.query.projectId
  sess = req.session

  listIssuesTest = []
  listIssues = []
  db._getProjectFromProjectId(projectId).then(result => {
    db._getAllProjectIssues(result.id).then(issues => {
      issues.forEach(issue => {
        listIssues.push(issue)
      })
      // récupérer les tests depuis la db
      res.render(LIST_TEST_VIEW_PATH, {
        session: sess,
        listTests: listTests,
        project: sess.project,
        listProjects: sess.listProjects,
        listIssuesTest: listIssues
      })
    })
  })
})

app.post(REMOVE_TEST_ROUTE, function(req, res) {
  /*
  console.log('Removed')
  const issueId = req.body.issueId
  removeIssue(issueId, listIssues)
  db._deleteIssue(issueId)

  res.render(LIST_ISSUES_VIEW_PATH, {
    session: sess,
    listTests: listTests,
    projectId: projectId,
    project: currentProject
  }) */
})

app.post(CREATE_TEST_ROUTE, function(req, res) {
  const testName = req.body.testName
  const testDescription = req.body.testDescription
  let resultExpected = req.body.testResultExpected
  let lastVersionValidated = req.body.testLastVersionValidated
  console.log('Test ' + testName + ' created')

  listIssuesTest = isChecked(req, listIssues)

  db._addTest(
    projectId,
    testName,
    testDescription,
    resultExpected,
    lastVersionValidated,
    DEFAULT_STATE
  ).then(testId => {
    db._setIssuesToTest(testId, listIssuesTest).then(result => {
      res.redirect('back')
    })
  })
})

module.exports.app = app
