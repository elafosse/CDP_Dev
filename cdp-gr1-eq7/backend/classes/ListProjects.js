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

  function removeProject (id, listProjects){
    listProjects.forEach(project => {
      if (project.id === id){
        let index = listProjects.indexOf (project)
        listProjects.splice (index, 1)
      }
    })
  }
}

module.exports = {
  ListProjects:ListProjects
}
