/* REQUIRED */
let bodyParser = require('body-parser')
const mysql = require('mysql')


//addTask(projectId, name, description, state, start_date, realisation_time, DoD, List<int> dependancies, List<usernames> members)
class Task {
    constructor(taskId, projectId, name, description, state, start_date, realisation_time, dod, dependancies, members){
    this.taskId = taskId
    this.projectId = projectId
    this.name = name
    this.description = description
    this.state = state
    this.start_date = start_date
    this.realisation_time = realisation_time
    this.dod = dod
    this.members = members
    this.dependancies = dependancies
  }
}

module.exports = {
  Task:Task
}
