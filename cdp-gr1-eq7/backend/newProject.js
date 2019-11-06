/* CONFIG */
const express = require('express')
const app = express()

/* REQUIRED */
const path = require('path')
const ejs = require('ejs')
let bodyParser = require('body-parser')
const db = require('./bd_connexion')
const project = require ('./classes/Project')
const member = require ('./classes/Member')

/* USE THE REQUIRES */
app.use(bodyParser.urlencoded({ extended: false }))

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

let listMembers = []

/* FUNCTIONS */
function removeMember (username, listMembers){
    listMembers.forEach(member => {
      if (member.username === username){
        let index = listMembers.indexOf (member)
        let removed = listMembers.splice (index, 1)
        console.log('removed : ' + removed[0].username)
      }
    })
}

app.get (NEW_PROJECT_ROUTE, function (req, res){
  res.render (NEW_PROJECT_VIEW_PATH, {
    listMembers: listMembers
  })
})

/*app.get(PROJECT_OVERVIEW_ROUTE, function(req, res){
  res.render(PROJECT_OVERVIEW_PATH)
})*/

app.post(ADD_MEMBER_ROUTE, function(req, res){
  const memberUsernameToAdd = req.body.memberUsernameToAdd
  console.log("added " + memberUsernameToAdd)
  let newMember = new member.Member(memberUsernameToAdd, '', [])
  
  listMembers.push(newMember)
  res.render(NEW_PROJECT_VIEW_PATH, {
    listMembers: listMembers
  })
})

app.post(REMOVE_MEMBER_ROUTE, function(req, res){
  const memberUsernameToRemove = req.body.memberUsernameToRemove
  console.log("removed " + memberUsernameToRemove)
  
  removeMember(memberUsernameToRemove, listMembers)
  res.render(NEW_PROJECT_VIEW_PATH, {
    listMembers: listMembers
  })
})

app.post(CREATE_PROJECT_ROUTE, function(req, res){
  console.log(req.body.nameProject)
  
  // save the project in the db, update members list of projects in db etc
  res.render(NEW_PROJECT_VIEW_PATH, {
    listMembers: listMembers
  })
  //res.render(PROJECT_OVERVIEW_VIEW_PATH)
})

module.exports.app = app
