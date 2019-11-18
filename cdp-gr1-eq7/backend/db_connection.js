/* eslint-disable camelcase */
var mysql = require('mysql')
var bcrypt = require('bcrypt')

const Project = require('./classes/Project')
const Issue = require('./classes/Issue')
const Task = require('./classes/Task')

// https://stackoverflow.com/questions/30545749/how-to-provide-a-mysql-database-connection-in-single-file-in-nodejs
var con = mysql.createConnection({
  host: 'www.remotemysql.com',
  user: 'wjJ627V9qY',
  database: 'wjJ627V9qY',
  password: 'qpxKOx6Pe8',
  multipleStatements: true
})

// TODO : checker les paramètres vides

// ================ Projects ================

function _createProject(name, description) {
  return new Promise(function(resolve, reject) {
    const sql = 'INSERT INTO project (name, description) VALUES ('.concat(
      "'",
      name,
      "'",
      ',',
      "'",
      description,
      "'",
      ')'
    )
    con.query(sql, function(err, result) {
      if (err) {
        reject(err)
        return
      }
      resolve(result.insertId)
    })
  })
}

function _deleteProject(id) {
  return new Promise(function(resolve, reject) {
    const sql = 'DELETE FROM project WHERE id = '.concat("'", id, "'")
    con.query(sql, function(err, result) {
      if (err) result(err)
      resolve('Project Deleted')
    })
  })
}

function _inviteMembersToProject(projectId, usernameList, areAdminsList) {
  return new Promise(function(resolve, reject) {
    if (usernameList.length !== areAdminsList.length) {
      reject(
        new Error(
          'The usernameList and the areAdminsList lenght must be the same'
        )
      )
    }
    let i
    let sql = ''
    for (i = 0; i < usernameList.length; i++) {
      sql = sql.concat(
        "INSERT INTO project_team (project_id, username, is_admin) VALUES ('",
        projectId,
        "','",
        usernameList[i],
        "'",
        ',',
        areAdminsList[i],
        ');\n'
      )
    }
    con.query(sql, function(err, result) {
      if (err) reject(err)
      resolve('Members added')
    })
  })
}

function _deleteMembersFromProject(projectId, usernameList) {
  return new Promise(function(resolve, reject) {
    let i
    let sql = ''
    for (i = 0; i < usernameList.length; i++) {
      // TODO: check if the user is not the admin of the project
      sql = sql.concat(
        'DELETE FROM project_team WHERE project_id = ',
        projectId,
        ' and username = ',
        "'",
        usernameList[i],
        "';\n"
      )
    }
    con.query(sql, function(err, result) {
      if (err) reject(err)
      resolve('Members deleted')
    })
  })
}

function _getMembersOfProject(project_id) {
  return new Promise(function(resolve, reject) {
    const sql = "SELECT username FROM project_team WHERE project_id = '".concat(
      project_id,
      "'"
    )
    con.query(sql, function(err, result) {
      if (err) reject(err)
      const id_list = []
      for (let i = 0; i < result.length; i++) {
        id_list.push(result[i].username)
      }
      resolve(id_list)
    })
  })
}

function _getAdminsOfProject(project_id) {
  return new Promise(function(resolve, reject) {
    const sql = "SELECT username FROM project_team WHERE project_id = '".concat(
      project_id,
      "' and is_admin = '1'"
    )
    con.query(sql, function(err, result) {
      if (err) reject(err)
      const id_list = []
      for (let i = 0; i < result.length; i++) {
        id_list.push(result[i].username)
      }
      resolve(id_list)
    })
  })
}

// ================ Members ================
// https://medium.com/@mridu.sh92/a-quick-guide-for-authentication-using-bcrypt-on-express-nodejs-1d8791bb418f

function _storeMember(username, password) {
  return new Promise(function(resolve, reject) {
    bcrypt.hash(password, 10, function(err, hashedPassword) {
      if (err) throw err
      const sql = 'INSERT INTO member (username, password) VALUES ('.concat(
        "'",
        username,
        "','",
        hashedPassword,
        "'",
        ')'
      )
      con.query(sql, function(err, result) {
        if (err) {
          reject(err)
          return
        }
        resolve(result.insertId)
      })
    })
  })
}

function _getProjectsIdsOfMember(username) {
  return new Promise(function(resolve, reject) {
    // TODO: Vérifier si le couple user/project_id n'existe pas déjà
    const sql = "SELECT project_id FROM project_team WHERE username = '".concat(
      username,
      "'"
    )
    con.query(sql, function(err, result) {
      if (err) reject(err)
      const id_list = []
      for (let i = 0; i < result.length; i++) {
        id_list.push(result[i].project_id)
      }
      resolve(id_list)
    })
  })
}

function _getProjectFromProjectId(project_id) {
  return new Promise(function(resolve, reject) {
    _getMembersOfProject(project_id).then(
      members => {
        _getAdminsOfProject(project_id).then(
          admins => {
            const p = new Promise(function(resolve, reject) {
              const sql = "SELECT * FROM project WHERE id = '".concat(
                project_id,
                "'"
              )
              con.query(sql, function(err, result) {
                if (err) {
                  reject(err)
                  return
                }
                const project = new Project.Project(
                  result[0].id,
                  result[0].name,
                  result[0].description,
                  members,
                  admins
                )
                resolve(project)
              })
            })
            p.then(projects => {
              resolve(projects)
            })
          },
          raison => {
            reject(raison)
          }
        )
      },
      raison => {
        reject(raison)
      }
    )
  })
}

function _getProjectsOfMember(username) {
  return new Promise(function(resolve, reject) {
    _getProjectsIdsOfMember(username).then(
      id_list => {
        const promise_list = []
        for (let i = 0; i < id_list.length; i++) {
          const promise = _getProjectFromProjectId(id_list[i])
          promise_list.push(promise)
        }
        Promise.all(promise_list).then(function(project_list) {
          resolve(project_list)
        })
      },
      raison => {
        reject(raison)
      }
    )
  })
}

function _getTaskIdsAssignedToMember(username) {
  return new Promise(function(resolve, reject) {
    // TODO: Vérifier si le couple user/project_id n'existe pas déjà
    const sql = "SELECT task_id FROM assigned_task WHERE username = '".concat(
      username,
      "'"
    )
    con.query(sql, function(err, result) {
      if (err) {
        reject(err)
        return
      }
      const id_list = []
      for (let i = 0; i < result.length; i++) {
        id_list.push(result[i].task_id)
      }
      resolve(id_list)
    })
  })
}

function _areUsernameAndPasswordCorrect(username, password) {
  return new Promise(function(resolve, reject) {
    const sql = "SELECT * FROM member WHERE username = '".concat(username, "'")
    con.query(sql, function(err, result) {
      if (err) {
        reject(err)
        return
      }
      if (result.length === 0) {
        resolve(false)
        return
      }
      const hashedPassword = result[0].password
      bcrypt.compare(password, hashedPassword, function(err, result) {
        if (err) reject(err)
        if (result === true) {
          resolve(true)
        } else {
          resolve(false)
        }
      })
    })
  })
}

function _doesUsernameExists(username) {
  return new Promise(function(resolve, reject) {
    const sql = "SELECT username FROM member WHERE username = '".concat(
      username,
      "'"
    )
    con.query(sql, function(err, result) {
      if (err) reject(err)
      if (result.length === 0) {
        resolve(false)
      } else {
        resolve(true)
      }
    })
  })
}

function _deleteMember(username) {
  return new Promise(function(resolve, reject) {
    const sql = "DELETE FROM member WHERE username = '".concat(username, "'")
    con.query(sql, function(err, result) {
      if (err) reject(err)
      resolve('Member deleted')
    })
  })
}

/* function _isUsernameAvailable(username) {
    return new Promise(function (resolve, reject) {
        let sql = "SELECT username FROM member WHERE username = '"
            .concat(username, "\'");
        con.query(sql, function (err, result) {
            if (err) reject(err);
            if (result === []) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        });
    });
}
*/

// ================ Issues ================

/*
 * 
function f(name) {
    return new Promise(function (resolve, reject) {

    });
}

f("hello").then((valeur) => {
    console.log(valeur);
}, (raison) => {
    console.log("Pas ajouté");
});

f("User5").then((valeur) => {
    console.log(valeur);
})

*/

function _addIssueToProject(
  projectId,
  name,
  description,
  priority,
  difficulty
) {
  return new Promise(function(resolve, reject) {
    const sql = 'INSERT INTO issue (project_id, name, description, priority, difficulty) VALUES ('.concat(
      "'",
      projectId,
      "','",
      name,
      "','",
      description,
      "','",
      priority,
      "',",
      difficulty,
      ')'
    )
    con.query(sql, function(err, result) {
      if (err) {
        reject(err)
        return
      }
      resolve(result.insertId)
    })
  })
}

function _modifyIssue(issueId, name, description, priority, difficulty) {
  return new Promise(function(resolve, reject) {
    var sql = 'UPDATE issue SET'.concat(
      " name = '",
      name,
      "',",
      " description = '",
      description,
      "',",
      " priority = '",
      priority,
      "',",
      " difficulty = '",
      difficulty,
      "'",
      " WHERE id = '",
      issueId,
      "';\n"
    )
    con.query(sql, function(err, result) {
      if (err) reject(err)
      resolve(result.affectedRows)
    })
  })
}

function _getAllProjectIssues(project_id) {
  return new Promise(function(resolve, reject) {
    const sql = "SELECT * FROM issue WHERE project_id = '".concat(
      project_id,
      "'"
    )
    con.query(sql, function(err, result) {
      if (err) reject(err)
      const issue_list = []
      for (let i = 0; i < result.length; i++) {
        issue_list.push(
          new Issue.Issue(
            result[i].id,
            result[i].project_id,
            result[i].name,
            result[i].description,
            result[i].priority,
            result[i].difficulty
          )
        )
      }
      resolve(issue_list)
    })
  })
}

function _deleteIssue(issueId) {
  return new Promise(function(resolve, reject) {
    const sql = "DELETE FROM issue WHERE id = '".concat(issueId, "'")
    con.query(sql, function(err, result) {
      if (err) reject(err)
      resolve('Issue removed')
    })
  })
}

function _getIssueById(issueId) {
  return new Promise(function(resolve, reject) {
    const sql = "SELECT * FROM issue WHERE id = '".concat(issueId, "'")
    con.query(sql, function(err, result) {
      if (err) reject(err)
      const issue = new Issue.Issue(
        result[0].id,
        result[0].project_id,
        result[0].name,
        result[0].description,
        result[0].priority,
        result[0].difficulty
      )
      resolve(issue)
    })
  })
}

// ================ Tasks ================

function _getAllTasksIdsByProject(project_id) {
  return new Promise(function(resolve, reject) {
    const sql = "SELECT id FROM task WHERE project_id = '".concat(
      project_id,
      "'"
    )
    con.query(sql, function(err, result) {
      if (err) reject(err)
      const id_list = []
      for (let i = 0; i < result.length; i++) {
        id_list.push(result[i].id)
      }
      resolve(id_list)
    })
  })
}

function _getAllTasksIdsByProjectAndState(project_id, state) {
  return new Promise(function(resolve, reject) {
    const sql = "SELECT id FROM task WHERE project_id = '".concat(
      project_id,
      "'",
      "AND state = '",
      state,
      "'"
    )
    con.query(sql, function(err, result) {
      if (err) reject(err)
      const id_list = []
      for (let i = 0; i < result.length; i++) {
        id_list.push(result[i].id)
      }
      resolve(id_list)
    })
  })
}

function _getTaskById(task_id) {
  return new Promise(function(resolve, reject) {
    _getIssuesOfTask(task_id).then(
      issues => {
        _getMembersAssignedToTask(task_id).then(members => {
          _getTaskDependencies(task_id).then(dependencies => {
            const sql = "SELECT * FROM task WHERE id = '".concat(task_id, "'")
            con.query(sql, function(err, result) {
              if (err) reject(err)
              const task = new Task.Task(
                result[0].id,
                result[0].project_id,
                result[0].name,
                result[0].description,
                result[0].state,
                result[0].start_date,
                result[0].realisation_time,
                result[0].description_of_done,
                dependencies,
                members,
                issues
              )
              resolve(task)
            })
          })
        })
      },
      raison => {
        reject(raison)
      }
    )
  })
}

function _getAllTasksOfProject(project_id) {
  return new Promise(function(resolve, reject) {
    _getAllTasksIdsByProject(project_id).then(
      id_list => {
        const promise_list = []
        for (let i = 0; i < id_list.length; i++) {
          const promise = _getTaskById(id_list[i])
          promise_list.push(promise)
        }
        Promise.all(promise_list).then(function(task_list) {
          resolve(task_list)
        })
      },
      raison => {
        console.log(raison)
      }
    )
  })
}

function _getAllTasksOfProjectByState(project_id, state) {
  return new Promise(function(resolve, reject) {
    _getAllTasksIdsByProjectAndState(project_id, state).then(
      id_list => {
        const promise_list = []
        for (let i = 0; i < id_list.length; i++) {
          const promise = _getTaskById(id_list[i])
          promise_list.push(promise)
        }
        Promise.all(promise_list).then(function(task_list) {
          resolve(task_list)
        })
      },
      raison => {
        console.log(raison)
      }
    )
  })
}

function _addTask(
  projectId,
  name,
  description,
  state,
  date_beginning,
  realisation_time,
  DoD,
  dependencies /* list of task id */,
  members /* list username */,
  issues /* list of issue id */
) {
  return new Promise(function(resolve, reject) {
    const sql = 'INSERT INTO task (project_id, name, description, state, start_date, realisation_time, description_of_done) VALUES ('.concat(
      "'",
      projectId,
      "'",
      ',',
      "'",
      name,
      "'",
      ',',
      "'",
      description,
      "'",
      ',',
      "'",
      state,
      "'",
      ',',
      "'",
      date_beginning,
      "'",
      ',',
      "'",
      realisation_time,
      "'",
      ',',
      "'",
      DoD,
      "'",
      ');'
    )
    con.query(sql, function(err, result) {
      if (err) throw err
      console.log('New task added')
      const taskId = result.insertId
      _setTaskDependencies(taskId, dependencies).then(
        _setTaskToMembers(taskId, members).then(_setTaskToIssue(taskId, issues))
      )
    })
  })
}

function _modifyTask(
  taskId,
  name,
  description,
  state,
  startDate,
  realisationTime,
  DoD
) {
  return new Promise(function(resolve, reject) {
    var sql = 'UPDATE task SET'.concat(
      " name = '",
      name,
      "',",
      " description = '",
      description,
      "',",
      " state = '",
      state,
      "',",
      " start_date = '",
      startDate,
      "',",
      " realisation_time = '",
      realisationTime,
      "',",
      " description_of_done = '",
      DoD,
      "'",
      " WHERE id = '",
      taskId,
      "';\n"
    )
    con.query(sql, function(err, result) {
      if (err) reject(err)
      resolve(result.affectedRows)
    })
  })
}

function _setTaskDependencies(taskId, dependsOnTasksIdList) {
  return new Promise(function(resolve, reject) {
    var sql = "DELETE FROM task_dependencies WHERE task_id = '".concat(
      taskId,
      "';\n"
    )
    for (let i = 0; i < dependsOnTasksIdList.length; i++) {
      sql = sql.concat(
        'INSERT INTO task_dependencies (task_id, depend_on_task_id) VALUES (',
        "'",
        taskId,
        "'",
        ',',
        "'",
        dependsOnTasksIdList[i],
        "'",
        '); \n'
      )
    }
    con.query(sql, function(err, result) {
      if (err) reject(err)
      resolve('New dependencies added')
    })
  })
}

function _setTaskToMembers(taskId, usernameList) {
  // TODO : check if username exists
  return new Promise(function(resolve, reject) {
    let i
    let sql = "DELETE FROM assigned_task WHERE task_id = '".concat(
      taskId,
      "';\n"
    )
    if (typeof usernameList === 'string') {
      sql = sql.concat(
        "INSERT INTO assigned_task (task_id, username) VALUES ('",
        taskId,
        "','",
        usernameList,
        "'",
        ');\n'
      )
    } else {
      for (i = 0; i < usernameList.length; i++) {
        sql = sql.concat(
          "INSERT INTO assigned_task (task_id, username) VALUES ('",
          taskId,
          "','",
          usernameList[i],
          "'",
          ');\n'
        )
      }
    }
    con.query(sql, function(err, result) {
      if (err) reject(err)
      resolve('Task assigned to members')
    })
  })
}

function _getMembersAssignedToTask(taskId) {
  return new Promise(function(resolve, reject) {
    const sql = "SELECT username FROM assigned_task WHERE task_id = '".concat(
      taskId,
      "'"
    )
    con.query(sql, function(err, result) {
      if (err) reject(err)
      const id_list = []
      for (let i = 0; i < result.length; i++) {
        id_list.push(result[i].username)
      }
      resolve(id_list)
    })
  })
}

function _getTaskDependencies(taskId) {
  return new Promise(function(resolve, reject) {
    const sql = "SELECT depend_on_task_id FROM task_dependencies WHERE task_id = '".concat(
      taskId,
      "'"
    )
    con.query(sql, function(err, result) {
      if (err) reject(err)
      const id_list = []
      for (let i = 0; i < result.length; i++) {
        id_list.push(result[i].depend_on_task_id)
      }
      resolve(id_list)
    })
  })
}

function _updateTaskState(taskId, state) {
  return new Promise(function(resolve, reject) {
    var sql = 'UPDATE task SET state = '.concat(
      "'",
      state,
      "'",
      " WHERE id = '",
      taskId,
      "'"
    )
    con.query(sql, function(err, result) {
      if (err) reject(err)
      result(result.affectedRows)
    })
  })
}

function _deleteTask(taskId) {
  return new Promise(function(resolve, reject) {
    const sql = "DELETE FROM task WHERE id = '".concat(taskId, "'")
    con.query(sql, function(err, result) {
      if (err) reject(err)
      resolve('Issue removed')
    })
  })
}

function _setTaskToIssue(task_id, issueId_list) {
  return new Promise(function(resolve, reject) {
    let i = 0
    var sql = "DELETE FROM issue_of_task WHERE task_id = '".concat(
      task_id,
      "';\n"
    )
    for (i = 0; i < issueId_list.length; i++) {
      sql = sql.concat(
        "INSERT INTO issue_of_task (task_id, issue_id) VALUES ('",
        task_id,
        "','",
        issueId_list[i],
        "'",
        ');\n'
      )
    }
    con.query(sql, function(err, result) {
      if (err) reject(err)
      resolve('Issues linked to task')
    })
  })
}

function _getIssuesIdsOfTask(task_id) {
  return new Promise(function(resolve, reject) {
    const sql = "SELECT issue_id FROM issue_of_task WHERE task_id = '".concat(
      task_id,
      "'"
    )
    con.query(sql, function(err, result) {
      if (err) reject(err)
      const id_list = []
      for (let i = 0; i < result.length; i++) {
        id_list.push(result[i].issue_id)
      }
      resolve(id_list)
    })
  })
}

function _getIssuesOfTask(task_id) {
  return new Promise(function(resolve, reject) {
    _getIssuesIdsOfTask(task_id).then(
      id_list => {
        const promise_list = []
        for (let i = 0; i < id_list.length; i++) {
          const promise = _getIssueById(id_list[i])
          promise_list.push(promise)
        }
        Promise.all(promise_list).then(function(task_list) {
          resolve(task_list)
        })
      },
      raison => {
        console.log(raison)
      }
    )
  })
}

// ================ Checklist ================

function _setTaskChecklist(taskId, description, isDone) {
  return new Promise(function(resolve, reject) {
    const sql = "INSERT INTO task_checklist (task_id, description, is_done) VALUES ('".concat(
      taskId,
      "','",
      description,
      "',",
      isDone,
      ');\n'
    )
    con.query(sql, function(err, result) {
      if (err) {
        reject(err)
        return
      }
      resolve('Task assigned to members')
    })
  })
}

function _modifyTaskDescription(checklistId, description) {
  return new Promise(function(resolve, reject) {
    var sql = 'UPDATE task_checklist SET '.concat(
      "description = '",
      description,
      "'  WHERE id = '",
      checklistId,
      "'"
    )
    con.query(sql, function(err, result) {
      if (err) {
        reject(err)
        return
      }
      resolve('Task modified')
    })
  })
}

function _modifyTaskState(checklistId, isDone) {
  return new Promise(function(resolve, reject) {
    var sql = 'UPDATE task_checklist SET '.concat(
      'is_done = ',
      isDone,
      " WHERE id = '",
      checklistId,
      "'"
    )
    con.query(sql, function(err, result) {
      if (err) reject(err)
      resolve(result.affectedRows)
    })
  })
}

function _getTaskChecklist(task_id) {
  return new Promise(function(resolve, reject) {
    const sql = "SELECT * FROM task_checklist WHERE task_id = '".concat(
      task_id,
      "'"
    )
    con.query(sql, function(err, result) {
      if (err) reject(err)
      const id_list = []
      for (let i = 0; i < result.length; i++) {
        id_list.push([result[i].description, result[i].is_done])
      }
      resolve(id_list)
    })
  })
}

function _getChecklistItemById(itemId) {
  return new Promise(function(resolve, reject) {
    const sql = "SELECT * FROM task_checklist WHERE id = '".concat(itemId, "'")
    con.query(sql, function(err, result) {
      if (err) reject(err)
      const id_list = []
      for (let i = 0; i < result.length; i++) {
        id_list.push([result[i].id, result[i].description, result[i].is_done])
      }
      resolve(id_list)
    })
  })
}

// ================ Tests ================

function _addTest(
  name,
  description,
  expected_result,
  is_implemented,
  is_validated,
  last_version_validated,
  listIssues
) {}

function _setIssuesToTest(test_id, listIssues) {}

function _deleteTest(test_id) {}

function _modifyTest(
  test_id,
  name,
  description,
  expected_result,
  last_version_validated
) {}

function _setIsValidated(test_id, is_validated) {}

function _setIsImplemented(test_id, is_implemented) {}

function _getAllTestsIdsFromProject(project_id) {}

function _getAllTestsFromProject(project_id) {}

module.exports = {
  _getProjectsIdsOfMember,
  _getProjectFromProjectId,
  _getProjectsOfMember,
  _getTaskIdsAssignedToMember,
  _areUsernameAndPasswordCorrect,
  _createProject,
  _deleteProject,
  _inviteMembersToProject,
  _deleteMembersFromProject,
  _getMembersOfProject,
  _getAdminsOfProject,
  _storeMember,
  _deleteMember,
  _doesUsernameExists,
  _addIssueToProject,
  _modifyIssue,
  _getAllProjectIssues,
  _deleteIssue,
  _getIssueById,
  _getAllTasksIdsByProject,
  _getAllTasksIdsByProjectAndState,
  _getTaskById,
  _getAllTasksOfProject,
  _getAllTasksOfProjectByState,
  _addTask,
  _modifyTask,
  _setTaskDependencies,
  _setTaskToMembers,
  _getMembersAssignedToTask,
  _getTaskDependencies,
  _updateTaskState,
  _deleteTask,
  _setTaskChecklist,
  _modifyTaskDescription,
  _modifyTaskState,
  _getTaskChecklist,
  _getChecklistItemById,
  _getIssuesOfTask,
  _setTaskToIssue
}
