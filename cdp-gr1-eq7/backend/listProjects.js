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

const LIST_PROJECTS_ROUTE = '/list-projects'
const NEW_PROJECT_ROUTE = '/new-project'

const LIST_PROJECTS_VIEW_PATH = '../views/listProjects'
const NEW_PROJECT_VIEW_PATH = '../views/newProject'

let user = new member.Member ('m1', 'pwd1', [])

/* TESTS ZONE */
/*let p1 = new project.Project ('p1', 'p1', 'id1', [], user)
user.listProjects.push (p1)

let m2 = new member.Member ('m2', 'pwd1', [])
let p2 = new project.Project ('p2', 'p2', 'id2', [], m2)
user.listProjects.push (p2)*/

/* FUNCTIONS */
function getProjects (user){
  
}

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

// require newProject here causes an error if newProject requireq listProjects too
/*app.get (NEW_PROJECT_ROUTE, function (req, res){
  res.render (NEW_PROJECT_VIEW_PATH)
})*/

// delete project
app.post ('/remove-project', function (req, res){
  const projectId = req.body.projectId;
  removeProject (projectId, user.listProjects)

  db.deleteProject(user, projectId)
  // TODO: récupérer l'id pour pouvoir màj les membres

  res.render (LIST_PROJECTS_VIEW_PATH, {
    userProjects: user.listProjects,
    user: user
  })
})

module.exports = {
  app:app
}