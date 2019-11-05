var mysql = require('mysql');
var bcrypt = require('bcrypt');

const Task = require('./classes/Task').default;


var con = mysql.createConnection({
    host: "www.remotemysql.com",
    user: "wjJ627V9qY",
    database: "wjJ627V9qY",
    password: "qpxKOx6Pe8",
    multipleStatements: true
});


// ================ Projects ================

export function createProject(name, description) {
    let sql = "INSERT INTO project (name, description) VALUES (".concat("'", name, "'", ',', "'", description, "'", ')');
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("New project added : (".concat(name, ',', description, ')'));
    });
}

export function deleteProject(username, id) {
    //TODO: check if username is the project admin. 
    let sql = "DELETE FROM project WHERE id = ".concat("'", id, "'");
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Project deleted");
    });
}

export function inviteMembersToProject(projectId, usernameList, areAdminsList) {
    if (usernameList.length != areAdminsList.length) {
        throw "The usernameList and the areAdminsList lenght must be the same";
    }
    let i;
    let sql = "";
    for (i = 0; i < usernameList.length; i++) {
        sql = sql.concat("INSERT INTO project_team (project_id, username, is_admin) VALUES ('",
            projectId, "','", usernameList[i], "'", ',', areAdminsList[i], ');\n');

    }
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Member ".concat(usernameList[i], ' added to project'));
    });
}

export function deleteMembersFromProject(projectId, usernameList) {
    let i;
    let sql = "";
    for (i = 0; i < usernameList.length; i++) {
        //TODO: check if the user is not the admin of the project
        sql = sql.concat("DELETE FROM project_team WHERE project_id = ",
            projectId, " and username = ", "'", usernameList[i], "';\n");
    }
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Member ".concat(usernameList[i], ' removed from project'));
    });
}

//TODO : This must return Member object instead of usernames;
export function getMembersOfProject(project_id) {
    let sql = "SELECT username FROM project_team WHERE project_id = '"
        .concat(project_id, "\'");
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        let id_list = [];
        for (let i = 0; i < result.length; i++) {
            id_list.push(result[i].username);
        }
        console.log(id_list);
        return id_list;
    });
}


// ================ Members ================
//https://medium.com/@mridu.sh92/a-quick-guide-for-authentication-using-bcrypt-on-express-nodejs-1d8791bb418f

export function storeMember(username, password) {
    bcrypt.hash(password, 10, function (err, hashedPassword) {
        if (err) throw err;
        let sql = "INSERT INTO member (username, password) VALUES (".concat("'", username, "','", hashedPassword, "'", ')');
        console.log(sql);
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("New member stored : ".concat(username));
        });
    });
}

export function getProjectsIdsOfMember(username) {
    // TODO: Vérifier si le couple user/project_id n'existe pas déjà
    let sql = "SELECT project_id FROM project_team WHERE username = '"
        .concat(username, "\'");
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        let id_list = [];
        for (let i = 0; i < result.length; i++) {
            id_list.push(result[i].project_id);
        }
        console.log(id_list);
        return id_list;
    });
}

export function getTaskIdsOfMember(username) {
    // TODO: Vérifier si le couple user/project_id n'existe pas déjà
    let sql = "SELECT task_id FROM assigned_task WHERE username = '"
        .concat(username, "\'");
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        let id_list = [];
        for (let i = 0; i < result.length; i++) {
            id_list.push(result[i].task_id);
        }
        console.log(id_list);
        return id_list;
    });
}

export function areUsernameAndPasswordCorrect(username, password, functionSuccess, functionFail) {
    let sql = "SELECT password FROM member WHERE username = '"
        .concat(username, "\'");
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) return err;
        let hashedPassword = result[0].password;
        bcrypt.compare(password, hashedPassword, function (err, result) {
            if (result == true) {
                //True
                functionSuccess();
            }
            else {
                //False
                functionFail();
            }
        });
    });
}

export function deleteMember(username) {
    let sql = "DELETE FROM member WHERE username = '"
        .concat(username, "\'");
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Member deleted");
    });
    
}

deleteMember("User4");

// ================ Issues ================

export function addIssueToProject(projectId, name, description, priority, difficulty) {
    let sql = "INSERT INTO issue (project_id, name, description, priority, difficulty) VALUES ("
        .concat("'", projectId, "','", name, "','", description, "','", priority, "','", difficulty, ")");
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("New issue added");
    });
}

export function modifyIssue(issueId, name, description, priority, difficulty) {
    var sql = "UPDATE issue SET".concat(
        " name = '", name, "',",
        " description = '", description, "',",
        " priority = '", priority, "',",
        " difficulty = '", difficulty, "'",
        " WHERE id = '", issueId, "';\n");
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
}

export function getAllProjectIssues(project_id) {
    let sql = "SELECT id FROM issue WHERE project_id = '"
        .concat(project_id, "\'");
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        let id_list = [];
        for (let i = 0; i < result.length; i++) {
            id_list.push(result[i].id);
        }
        console.log(id_list);
        return id_list;
    });
}

export function deleteIssue(issueId) {
    let sql = "DELETE FROM issue WHERE id = '"
        .concat(issueId, "'");
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Issue removed");
    });
}



// ================ Tasks ================

export function addTask(projectId, name, description, state, date_beginning, realisation_time, DoD, dependencies /*list int*/, members /*list User*/) {
    let sql = "INSERT INTO task (project_id, name, description, state, start_date, realisation_time, description_of_done) VALUES ("
        .concat(
            "'", projectId, "'", ',',
            "'", name, "'", ',',
            "'", description, "'", ',',
            "'", state, "'", ',',
            "'", date_beginning, "'", ',',
            "'", realisation_time, "'", ',',
            "'", DoD, "'", ');');
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("New task added");
        let taskId = result.insertId;
        // TODO: check if the members are part of the project and members/dependencies != [] 

        setTaskDependencies(taskId, dependencies);
        setTaskToMembers(taskId, members)
    });
}

export function modifyTask(taskId, name, description, state, startDate, realisationTime, DoD) {
    var sql = "UPDATE task SET".concat(
        " name = '", name, "',",
        " description = '", description, "',",
        " state = '", state, "',",
        " start_date = '", startDate, "',",
        " realisation_time = '", realisationTime, "',",
        " description_of_done = '", DoD, "'",
        " WHERE id = '", taskId, "';\n");
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
}

export function setTaskDependencies(taskId, dependsOnTasksIdList) {
    var sql = "DELETE FROM task_dependencies WHERE task_id = '".concat(taskId, "';\n");
    for (let i = 0; i < dependsOnTasksIdList.length; i++) {
        sql = sql.concat("INSERT INTO task_dependencies (task_id, depend_on_task_id) VALUES (",
            "'", taskId, "'", ',',
            "'", dependsOnTasksIdList[i], "'", '); \n');
    }
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("New dependencies added");
    });
}

export function setTaskToMembers(taskId, usernameList) {
    let i;
    let sql = "DELETE FROM assigned_task WHERE task_id = '".concat(taskId, "';\n");
    for (i = 0; i < usernameList.length; i++) {
        sql = sql.concat("INSERT INTO assigned_task (task_id, username) VALUES ('",
            taskId, "','", usernameList[i], "'", ');\n');

    }
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Task assigned to members");
    });
}

export function getTaskDependencies(taskId) {
    let sql = "SELECT depend_on_task_id FROM task_dependencies WHERE task_id = '"
        .concat(taskId, "\'");
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        let id_list = [];
        for (let i = 0; i < result.length; i++) {
            id_list.push(result[i].depend_on_task_id);
        }
        console.log(id_list);
        return id_list;
    });
}

export function updateTaskState(taskId, state) {
    var sql = "UPDATE task SET state = ".concat("'", state, "'", " WHERE id = '", taskId, "'");
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
}

export function deleteTask(taskId) {
    let sql = "DELETE FROM task WHERE id = '"
        .concat(taskId, "'");
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Issue removed");
    });
}

// /!\ Pas fini
export function setTaskChecklist(taskId, checklist) {
    let i;
    let sql = "DELETE FROM task_checklist WHERE task_id = '".concat(taskId, "';\n");
    for (i = 0; i < checklist.length; i++) {
        //TODO: Finir ça
        sql = sql.concat("INSERT INTO assigned_task (task_id, description, is_done) VALUES ('",
            taskId, "','",
            taskId, "','",
            usernameList[i], "'",
            ');\n');

    }
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Task assigned to members");
    });
}

export function deleteChecklistOfTask(taskId) {
    let sql = "DELETE FROM task_checklist WHERE task_id = '".concat(taskId, "';\n");
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Task assigned to members");
    });
}
