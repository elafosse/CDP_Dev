/* REQUIRED */
let bodyParser = require('body-parser')
const mysql = require('mysql')


//addTask(projectId, name, description, state, date_beginning, realisation_time, DoD, List<int> dependancies, List<usernames> members)
class Task {
  constructor (projectId, taskId, name, description, state, date_beginning, realisation_time, dod, dependancies,  members){
    this.projectId = projectId
    this.taskId = taskId
    this.name = name
    this.description = description
    this.state = state
    this.date_beginning = date_beginning
    this.realisation_time = realisation_time
    this.dod = dod
    this.members = members
  }
}

module.exports = {
  Task:Task
}
