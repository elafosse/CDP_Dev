/* CONFIG */
const express = require('express')
const app2 = new express.Router()
const path = require("path")
const ejs = require('ejs')
var bodyParser = require('body-parser')

app2.use(bodyParser.urlencoded({ extended: false }))

/* CONSTANTES */
const NEW_PROJECT_PAGE_PATH = "../frontend/newProject"

app2.get('/newProject', function (req, res) {
  res.render(NEW_PROJECT_PAGE_PATH)
})

/* CONSTANTES */
/*const KEYWORD_ID_LI_MEMBER = "li"
const KEYWORD_ID_BUTTON_DELETE_MEMBER = "delete"
const TEXT_BUTTON_DELETE_MEMBER = "Supprimer"

/* OTHER VARIABLES */
/*const projectsList = new Array(0) //TODO OSEF WITH DB
let listProjectMembers = new Array(0) //TODO OSEF WITH DB
let memberForButtonListener // stores a Member object to set the listener on its delete button

/* DB FUNCTIONS */
/*function updateDBMembers () {
}

/* CLASSES */
/*class Member {
  constructor (username){
    this.username = username
  }
}

class Project {
  constructor (name, description, listMembers, creator){
    this.creator = creator
    this.name = name
    this.description = description
    this.listMembers = listMembers //TODO OSEF AVEC DB 

    updateDBMembers()

    console.log("Project " + this.name + " created")

    listProjectMembers = [] //TODO OSEF AVEC DB 
    
    console.log(this.creator)
    console.log(this.name)
    console.log(this.description)
    listMembers.forEach(element => {
      console.log(element)
    });
  }

  updateDB(){ //TODO

  }
  
  addMember (newMember){
    // TODO WITH DB
    /*if (this.listMembers.indexOf(newMember) < 0){
      this.listMembers.push(newMember)
    }
    else{
      console.log("Already in list members")
    }*/
  /*}
  
  removeMember (member){
    //TODO WITH DB
    /*let memberIndex = this.listMembers.indexOf(member)
    if (memberIndex >= 0){
      this.listMembers.splice(memberIndex, 1);
    }
    else{
      console.log("Not in the list members")
    }*/
  /*}
}

/* OTHER FUNCTIONS */

/*function addMemberOnScreen(member){
  const ul = document.getElementById("listProjectMembers");
  const li = document.createElement("li");
  const buttonDelete = document.createElement('button')
  buttonDelete.setAttribute("id", KEYWORD_ID_BUTTON_DELETE_MEMBER + member.username)
  buttonDelete.innerHTML = TEXT_BUTTON_DELETE_MEMBER

  buttonDelete.onclick = function(){
    buttonDelete.parentElement.parentElement.removeChild(buttonDelete.parentElement)
  }
  
  li.appendChild(document.createTextNode(member.username));
  li.appendChild(buttonDelete)
  li.setAttribute("id", KEYWORD_ID_LI_MEMBER + member.username)
  ul.appendChild(li)
}

function removeMemberFromScreen(member){
  const ul = document.getElementById("listProjectMembers")
  const li = document.getElementById(KEYWORD_ID_LI_MEMBER + member.username) //TODO WITH DB
  document.getElementById(KEYWORD_ID_BUTTON_DELETE_MEMBER + member.username)
  
  ul.removeChild(li)
}

/* FUNCTIONS CALLED IN InitListeners */

/*function removeFromListProjectMember (){
  let memberIndex = listProjectMembers.indexOf(memberForButtonListener) //TODO WITH DB
  console.log(memberForButtonListener.username)
  if (memberIndex >= 0){
    listProjectMembers.splice(memberIndex, 1); //TODO WITH DB
  }
  else{
    console.log("Not in the list members")
  }
  
  removeMemberFromScreen(memberForButtonListener)
}

function addToListProjectMembers (){
  const newMemberUsername = document.getElementById("usernameMemberToAdd").value
  
  //CHERCHER DANS DB SI MEMBER EXISTS
  const memberToAdd = new Member (newMemberUsername) //TODO: A REMPLACER PAR OBJET MEMBER
  
  listProjectMembers.push(memberToAdd) //TODO: replace by DB function
  addMemberOnScreen(memberToAdd)
  
  memberForButtonListener = memberToAdd
}

function createNewProject (){
  const projectCreatorName =  document.getElementById("creatorName").value
  const projectName =  document.getElementById("nameProject").value
  const projectDescription =  document.getElementById("descriptionProject").value
  
  let newProject = new Project (projectName, projectDescription, listProjectMembers, projectCreatorName)
  projectsList.push(newProject); //TODO WITH DB
  //TODO changer de page html
}

/* LISTENERS AND INIT */
/*function initListeners(){
  document.getElementById("addMember").addEventListener('click', addToListProjectMembers);
  document.getElementById("createNewProject").addEventListener('click', createNewProject);
}

initListeners();*/

module.exports = app2
