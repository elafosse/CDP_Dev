/* CONFIG */
const express = require('express')
const app = express()

/* REQUIRED */
const path = require('path')
const ejs = require('ejs')
let bodyParser = require('body-parser')
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

const MODIFY_TEST_ROUTE = '/modifyTest'
const TO_DO_STATE_ROUTE = '/todoState'
const FAILED_STATE_ROUTE = '/failedState'
const PASSED_STATE_ROUTE = '/passedState'
const ADD_ISSUE_ROUTE = '/addIssueTest'
const REMOVE_ISSUE_ROUTE = '/removeIssueTest'

const MODIFY_TEST_VIEW_PATH = '../views/modifyTest'

const MODIFY_TEST_REDIRECT_URL = '/listTests?projectId='

let listIssuesTest = []

/* TESTS ZONE */
const Test = require('./classes/Test')

const issue = require('./classes/Issue')
const i1 = new issue.Issue('i1', 'i1', '1', 'id1', '1', '1')
listIssuesTest.push(i1)

const t2 = new Test.Test(
  'id2',
  'projectId',
  't2',
  'test 2',
  're 2',
  'v 0.0.1',
  'todo',
  listIssuesTest
)

/* FUNCTIONS*/
const TO_DO_STATE = 'todo'
const FAILED_STATE = 'failed'
const PASSED_STATE = 'passed'

let test = t2
let testId
let projectId
let sess
let listIssues = []
let newState

function isChecked(req, listIssues) {
  let result = []
  listIssues.forEach(issue => {
    if (req.body['' + issue.id]) {
      result.push(issue)
    }
  })
  return result
}

app.get(MODIFY_TEST_ROUTE, function(req, res) {
  projectId = req.query.projectId
  testId = req.query.testId
  sess = req.session

  listIssuesTest = []
  listIssues = []

  //db._getTestbyId(testId).then(t => {
  //test = t
  db._getAllProjectIssues(projectId).then(issues => {
    listIssues = issues
    /*db._getAllIssuesOfTest(testId).then(issuesTest => {
        listIssuesTest = issuesTest*/
    res.render(MODIFY_TEST_VIEW_PATH, {
      listIssues: listIssues,
      listIssuesTest: listIssuesTest,
      project: sess.project,
      session: sess,
      test: test
      //})
    })
  })
  //})
})

app.post(TO_DO_STATE_ROUTE, function(req, res) {
  newState = TO_DO_STATE
  res.render(MODIFY_TEST_VIEW_PATH, {
    listIssues: listIssues,
    listIssuesTest: listIssuesTest,
    project: sess.project,
    session: sess,
    test: test
  })
})

app.post(FAILED_STATE_ROUTE, function(req, res) {
  newState = FAILED_STATE
  res.render(MODIFY_TEST_VIEW_PATH, {
    listIssues: listIssues,
    listIssuesTest: listIssuesTest,
    project: sess.project,
    session: sess,
    test: test
  })
})

app.post(PASSED_STATE_ROUTE, function(req, res) {
  newState = PASSED_STATE
  res.render(MODIFY_TEST_VIEW_PATH, {
    listIssues: listIssues,
    listIssuesTest: listIssuesTest,
    project: sess.project,
    session: sess,
    test: test
  })
})

app.post(MODIFY_TEST_ROUTE, function(req, res) {
  let newName = req.body.testName
  let newDescription = req.body.testDescription
  let newResultExpected = req.body.testResultExpected
  let newLastVersionValidated = req.body.testLastVersionValidated

  console.log('Test of id ' + testId + ' modified')

  listIssuesTest = isChecked(req, listIssues)

  /*db._modifyTest(
    testId,
    newName,
    newDescription,
    newResultExpected,
    newLastVersionValidated,
    newState,
    listIssuesTest
  ).then(result => {*/
  res.redirect(MODIFY_TEST_REDIRECT_URL + projectId)
  //})
})

module.exports.app = app
