class Sprint {
  constructor(
    id,
    project_id,
    objective,
    date_begin,
    date_end,
    listIssues,
    release
  ) {
    this.id = id
    this.project_id = project_id
    this.objective = objective
    this.date_begin = date_begin
    this.date_end = date_end
    this.listIssues = listIssues
    this.release = release
    this.taskToDo = []
    this.taskDoing = []
    this.taskDone = []
    this.numberOfTasks = 0
  }

  addTaskToDo(task) {
    this.taskToDo.push(task)
    this.numberOfTasks++
  }

  addTaskDoing(task) {
    this.taskDoing.push(task)
    this.numberOfTasks++
  }

  addTaskDone(task) {
    this.taskDone.push(task)
    this.numberOfTasks++
  }
}

module.exports = {
  Sprint: Sprint
}
