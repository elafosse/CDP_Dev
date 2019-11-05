/* CONFIG */
const express = require('express')
const app = express()

/* REQUIRED */
const path = require('path')
const ejs = require('ejs')
let bodyParser = require('body-parser')
const mysql = require('mysql')
const project = require('./classes/Project')
const member = require('./classes/Member')

/* USE THE REQUIRES */
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './..', '/views'))

const LIST_PROJECTS_ROUTE = '/list-projects'
const NEW_PROJECT_ROUTE = '/new-project'

const LIST_PROJECTS_VIEW_PATH = '../views/listProjects'
const NEW_PROJECT_VIEW_PATH = '../views/newProject'

/* TESTS ZONE */
let user = new member.Member ('m1', 'pwd1', [])
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
  res.render (LIST_PROJECTS_VIEW_PATH, {
    userProjects: user.listProjects,
    user:user
  })
})

app.get (NEW_PROJECT_ROUTE, function (req, res){
  res.render (NEW_PROJECT_VIEW_PATH)
})

// delete project
app.post ('/remove-project', function (req, res){
  // Maj bdd
  const projectId = req.body.name;
  removeProject (projectId, user.listProjects)
  res.render (LIST_PROJECTS_VIEW_PATH, {
    userProjects: user.listProjects,
    user: user
  })
})

module.exports = {
  app:app
}