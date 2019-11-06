/* REQUIRED */
const mysql = require('mysql')

class Project {
  constructor (name, description, id, listMembers, admin){
    this.name = name
    this.description = description
    this.id = id
    this.listMembers = listMembers
    this.admin = admin
  }
}

module.exports = {
  Project:Project
}
