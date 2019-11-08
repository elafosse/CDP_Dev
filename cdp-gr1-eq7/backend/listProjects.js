/* CONFIG */
const express = require('express')
const app = express()

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

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './..', '/views'))

const LIST_PROJECTS_ROUTE = '/listProjects'
const REMOVE_PROJECT_ROUTE = '/removeProject'
const OVERVIEW_PROJECT_ROUTE = '/overviewProject'

const LIST_PROJECTS_VIEW_PATH = '../views/listProjects'
const OVERVIEW_PROJECT_VIEW_PATH = '../views/overviewProject'

let user = new member.Member ('User5', 'pwd1', [])
let listProjects = []

/* TESTS ZONE */
let p1 = new project.Project ('p1', 'p1', 'id1', [], user)
user.listProjects.push (p1)

let m2 = new member.Member ('m2', 'pwd1', [])
let p2 = new project.Project ('p2', 'p2', 'id2', [], m2)
user.listProjects.push (p2)

/* FUNCTIONS */

function removeProject (id, listProjects){
  listProjects.forEach(project => {
    if (project.id === id){
      let index = listProjects.indexOf (project)
      listProjects.splice (index, 1)
    }
  })
}

app.get (LIST_PROJECTS_ROUTE, function (req, res){
  
  db._getProjectsOfMember(user.username).then(result => {
    result.forEach(element => {
      listProjects.push(element)
    })
    res.render (LIST_PROJECTS_VIEW_PATH, {
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
  removeProject (projectId, user.listProjects)
  
  db._deleteProject(projectId)
  db._getMembersOfProject(project_id).then(members => {
    db._deleteMembersFromProject(projectId, members)
  })
  
  res.render (LIST_PROJECTS_VIEW_PATH, {
    userProjects: user.listProjects,
    user: user
  })
})

app.get (OVERVIEW_PROJECT_ROUTE, function(req, res){
  db._getProjectFromProjectId(req.query.projectId).then(project => {
    res.render (OVERVIEW_PROJECT_VIEW_PATH, {
      user: user,
      project: project
    })
  })
})

module.exports.app = app