/* REQUIRED */
const mysql = require('mysql')

class Issue{
  constructor (name, description, projectId, id, priority, difficulty){
    this.name = name
    this.description = description
    this.projectId = projectId
    this.id = id
    this.priority = priority
    this.difficulty = difficulty
  }
}

module.exports = {
  Issue:Issue
}