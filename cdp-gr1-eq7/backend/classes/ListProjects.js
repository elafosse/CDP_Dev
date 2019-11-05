/* REQUIRED */
const mysql = require('mysql')
const project = require('./project')

class ListProjects {
  constructor(){
    let listProjects = []
  }

  addProject (newProject){
    this.listProjects.push(newProject)
  }

  removeProject (project){
    let index = this.listProjects.indexOf(project) // fonctionne ??
    this.listProjects.splice(index, 1)
  }
}

module.exports = {
  ListProjects:ListProjects
}
