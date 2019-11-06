/* CONFIG */
const express = require('express')
const app = express()

/* REQUIRED */
const path = require('path')
const ejs = require('ejs')
let bodyParser = require('body-parser')
const mysql = require('mysql')
const project = require ('./classes/Project')
const member = require ('./classes/Member')

/* USE THE REQUIRES */
app.use(bodyParser.urlencoded({ extended: false }))
//app.use(listProjects.app)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './..', '/views'))

const NEW_PROJECT_ROUTE = '/new-project'
const PROJECT_OVERVIEW_ROUTE = '/project-overview'
const CREATE_PROJECT_ROUTE = '/create-project'
const NEW_PROJECT_VIEW_PATH = '../views/newProject'
//const PROJECT_OVERVIEW_VIEW_PATH = '../views/project'
const ADD_MEMBER_ROUTE = '/add-member'
const REMOVE_MEMBER_ROUTE = '/remove-member'

/* TESTS ZONE */
let user = new member.Member ('m1', 'pwd1', [])
let newProject = new project.Project ('p1', 'p1', 'id1', [], user)
newProject.listMembers.push(user)

/* FUNCTIONS */
function removeMember (username, listMembers){
  listMembers.forEach(member => {
    if (member.username === username){
      let index = listMembers.indexOf (member)
      listMembers.splice (index, 1)
    }
  })
}

app.get (NEW_PROJECT_ROUTE, function (req, res){
  res.render (NEW_PROJECT_VIEW_PATH, {
    project: newProject,
  })
})

/*app.get(PROJECT_OVERVIEW_ROUTE, function(req, res){
  res.render(PROJECT_OVERVIEW_PATH)
})*/

app.post(ADD_MEMBER_ROUTE, function(req, res){
  const memberUsernameToAdd = req.body.memberUsernameToAdd
  console.log("added " + memberUsernameToAdd)
  let newMember = new member.Member(memberUsernameToAdd, '', [])
  
  newProject.listMembers.push(newMember)
  res.render(NEW_PROJECT_VIEW_PATH, {
    project: newProject,
  })
})

app.post(REMOVE_MEMBER_ROUTE, function(req, res){
  const memberUsernameToRemove = req.body.memberUsernameToRemove
  console.log("removed " + memberUsernameToRemove)
  removeMember(memberUsernameToRemove, newProject.listMembers)
  res.render(NEW_PROJECT_VIEW_PATH, {
    project: newProject,
  })
})

app.post(CREATE_PROJECT_ROUTE, function(req, res){
  console.log("au revoir")

  // save the project in the db, update members list of projects in db etc
  res.render(NEW_PROJECT_VIEW_PATH, {
    project: newProject,
  })
  //res.render(PROJECT_OVERVIEW_VIEW_PATH)
})

module.exports.app = app