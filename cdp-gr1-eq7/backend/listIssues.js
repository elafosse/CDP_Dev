/* CONFIG */
const express = require('express')
const app = express()

/* REQUIRED */
const path = require('path')
const ejs = require('ejs')
let bodyParser = require('body-parser')
const db = require('./db_connection')
const member = require('./classes/Member')
const project = require('./classes/Project')
const issue = require('./classes/Issue')

/* USE THE REQUIRES */
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './..', '/views'))

const LIST_ISSUES_ROUTE = '/listIssues'

const LIST_ISSUES_VIEW_PATH = '../views/listIssues'

let listIssues = []
let user = new member.Member ('m1', 'pwd1', [])

/* TESTS ZONE */
let p1 = new project.Project ('p1', 'p1', 'id1', [], user)
let i1 = new issue.Issue('i1', 'i1', p1.id, 'id1', '1', '1')
listIssues.push(i1)

/* FUNCTIONS */

app.get(LIST_ISSUES_ROUTE, function(req, res) {
  res.render(LIST_ISSUES_VIEW_PATH, {
    listIssues: listIssues,
    project: p1,
    user: user
  })
})

module.exports.app = app