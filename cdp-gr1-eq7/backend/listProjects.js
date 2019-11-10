/* CONFIG */
const express = require('express')
const app = express()
const session = require('express-session')

/* REQUIRED */
const path = require('path')
const ejs = require('ejs')
let bodyParser = require('body-parser')
const db = require('./db_connection')
const project = require('./classes/Project')
const member = require('./classes/Member')
const newProject = require('./newProject')

/* USE THE REQUIRES */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(newProject.app)
app.use(session({secret: 'shhhhhhared-secret', saveUninitialized: true,resave: true}))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './..', '/views'))

const LIST_PROJECTS_ROUTE = '/listProjects'
const REMOVE_PROJECT_ROUTE = '/removeProject'
const OVERVIEW_PROJECT_ROUTE = '/overviewProject'

const LIST_PROJECTS_VIEW_PATH = '../views/listProjects'
const OVERVIEW_PROJECT_VIEW_PATH = '../views/overviewProject'

let user
let listProjects = []

/* TESTS ZONE */
/*let user = new member.Member ('User5', 'pwd1', [])
let p1 = new project.Project ('p1', 'p1', 'id1', [], user)
user.listProjects.push (p1)

let m2 = new member.Member ('m2', 'pwd1', [])
let p2 = new project.Project ('p2', 'p2', 'id2', [], m2)
user.listProjects.push (p2)*/

/* FUNCTIONS */

function removeProject (id, listProjects){
  console.log(id)
  listProjects.forEach(project => {
    console.log(project)
    if (project.id == id){
      let index = listProjects.indexOf (project)
      console.log(index)
      listProjects.splice (index, 1)
    }
  })
}

app.get (LIST_PROJECTS_ROUTE, function (req, res){
  listProjects = []
  
  user = req.session
  db._getProjectsOfMember(user.username).then(result => {
    result.forEach(element => {
      listProjects.push(element)
    })
    res.render (LIST_PROJECTS_VIEW_PATH, {
      session: req.session,
      userProjects: listProjects,
      user:user
    })
  })
  
})
// require newProject here causes an error if newProject requireq listProjects too
/*app.get (NEW_PROJECT_ROUTE, function (req, res){
  res.render (NEW_PROJECT_VIEW_PATH)
})*/

app.post (REMOVE_PROJECT_ROUTE, function (req, res){
  const projectId = req.body.projectId;
  removeProject (projectId, listProjects)

  res.render (LIST_PROJECTS_VIEW_PATH, {
    session: req.session,
    userProjects: listProjects,
    user: user
  })
  
  db._deleteProject(projectId)
})

app.get (OVERVIEW_PROJECT_ROUTE, function(req, res){
  db._getProjectFromProjectId(req.query.projectId).then(project => {
    res.render (OVERVIEW_PROJECT_VIEW_PATH, {
      session: req.session,
      user: user,
      project: project
    })
  })
})

module.exports.app = app