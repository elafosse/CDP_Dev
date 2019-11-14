/* CONFIG */
const express = require('express')
const app = express()

/* REQUIRED */
const db = require('./db_connection')
const session = require('express-session')

/* USE THE REQUIRES */
app.use(session({secret: 'shhhhhhared-secret', saveUninitialized: true,resave: true}))

const MODIFY_TEST_ROUTE = "/modifyTest"
const TO_DO_STATE_ROUTE = "/todoState"
const FAILED_STATE_ROUTE = "/failedState"
const PASSED_STATE_ROUTE = "/passedState"
const ADD_ISSUE_ROUTE = '/addIssueTest'
const REMOVE_ISSUE_ROUTE = '/removeIssueTest'

const MODIFY_TEST_VIEW_PATH = "../views/modifyTest"

const MODIFY_TEST_REDIRECT_URL = '/listTests?projectId='

/* FUNCTIONS*/
const TO_DO_STATE = "todo"
const FAILED_STATE = "failed"
const PASSED_STATE = "passed"

let testId
let projectId
let sess
let listIssuesTest
let newState

app.get(MODIFY_TEST_ROUTE, function(req, res){
  projectId = req.query.projectId
  testId = req.query.testId
  sess = req.session
  
  db._getProjectFromProjectId(projectId).then(currentProject =>{
    db._getTestById(testId).then(test =>{
      listIssuesTest = test.listIssues

      res.render(MODIFY_TEST_VIEW_PATH, {
        listIssuesTest: listIssuesTest,
        project: currentProject,
        session: sess,
        test: test
      })
    })
  })
})

app.post(TO_DO_STATE_ROUTE, function(req, res){
  newState = TO_DO_STATE
  res.render(MODIFY_TEST_VIEW_PATH, {
    //session: sess,
    listIssuesTest: listIssuesTest,
    project: currentProject,
    session: sess,
    test: test
  })
})

app.post(FAILED_STATE_ROUTE, function(req, res){
  newState = FAILED_STATE
  res.render(MODIFY_TEST_VIEW_PATH, {
    //session: sess,
    listIssuesTest: listIssuesTest,
    project: currentProject,
    session: sess,
    test: test
  })
})

app.post(PASSED_STATE_ROUTE, function(req, res){
  newState = PASSED_STATE
  res.render(MODIFY_TEST_VIEW_PATH, {
    //session: sess,
    listIssuesTest: listIssuesTest,
    project: currentProject,
    session: sess,
    test: test
  })
})

app.post(ADD_ISSUE_ROUTE, function(req, res){
  const issueIdToAdd = req.body.issueIdToAdd
  console.log("Added issue " + issueIdToAdd)
  
  // addIssue(issueIdToAdd, listIssuesTest) // used to test without db

  //listIssuesTest.push(issueIdToAdd)
  res.render(MODIFY_TEST_VIEW_PATH, {
    //session: sess,
    listIssuesTest: listIssuesTest,
    project: currentProject,
    session: sess,
    test: test
  })
})

app.post(REMOVE_ISSUE_ROUTE, function(req, res){
  const issueIdToRemove = req.body.issueIdToRemove
  console.log("Removed issue " + issueIdToRemove)
  
  removeIssue(issueIdToRemove, listIssuesTest)
  res.render(MODIFY_TEST_VIEW_PATH, {
    //session: sess,
    listIssuesTest: listIssuesTest,
    project: currentProject,
    session: sess,
    test: test
  })
})

app.post(MODIFY_TEST_ROUTE, function(req, res){
  let newName = req.body.testName
  let newDescription = req.body.testDescription
  let newResultExpected = req.body.testResultExpected
  let newLastVersionValidated = req.body.testLastVersionValidated

  console.log("Test of id " + testId + " modified")

  db._modifyTest(testId, newName, newDescription, newResultExpected, newLastVersionValidated, newState, listIssuesTest).then(result =>{
    res.redirect(MODIFY_TEST_REDIRECT_URL + projectId)
  })
})

module.exports.app = app
