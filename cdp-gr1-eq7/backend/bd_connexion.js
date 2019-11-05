var mysql = require('mysql');
var bcrypt = require('bcrypt');

var con = mysql.createConnection({
    host: "www.remotemysql.com",
    user: "wjJ627V9qY",
    database: "wjJ627V9qY",
    password: "qpxKOx6Pe8",
    multipleStatements: true
});


// ================ Projects ================
function createProject(name, description) {
    let sql = "INSERT INTO project (name, description) VALUES (".concat("'", name, "'", ',', "'", description, "'",')');
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("New project added : (".concat(name, ',', description, ')'));
    });
}

function deleteProject(username, id){
    //TODO: check if username is the project admin. 
    let sql = "DELETE FROM project WHERE id = ".concat("'", id, "'");
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Project deleted");
    });
}


function inviteMembersToProject(projectId, usernameList, areAdminsList) {
	if(usernameList.length != areAdminsList.length){
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

function deleteMembersFromProject(projectId, usernameList) {
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

function getUsernamesOfProject(project_id){
	let sql = "SELECT username FROM project_team WHERE project_id = '"
		.concat(project_id, "\'");
		console.log(sql);
		con.query(sql, function (err, result) {
		    	if (err) throw err;
			let id_list = [];
			for(let i = 0; i < result.length; i++){
				id_list.push(result[i].username);
			}
			console.log(id_list);
	      		return id_list;
		});
}
  

// ================ Members ================

//https://medium.com/@mridu.sh92/a-quick-guide-for-authentication-using-bcrypt-on-express-nodejs-1d8791bb418f


function storeMember(username, password) {
    bcrypt.hash(password, 10, function(err, hashedPassword) {
        if (err) throw err;
        let sql = "INSERT INTO member (username, password) VALUES (".concat("'", username, "','", hashedPassword, "'",')');
        console.log(sql);
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("New member stored : ".concat(username));
        });
    });
}

function getProjectsIdsOfMember(username) {
	// TODO: Vérifier si le couple user/project_id n'existe pas déjà
    let sql = "SELECT project_id FROM project_team WHERE username = '"
        .concat(username, "\'");
        console.log(sql);
        con.query(sql, function (err, result) {
            	if (err) throw err;
		let id_list = [];
		for(let i = 0; i < result.length; i++){
			id_list.push(result[i].project_id);
		}
		console.log(id_list);
      		return id_list;
        });
}

function getTaskIdsOfMember(username) {
	// TODO: Vérifier si le couple user/project_id n'existe pas déjà
    let sql = "SELECT task_id FROM assigned_task WHERE username = '"
        .concat(username, "\'");
        console.log(sql);
        con.query(sql, function (err, result) {
            	if (err) throw err;
		let id_list = [];
		for(let i = 0; i < result.length; i++){
			id_list.push(result[i].task_id);
		}
		console.log(id_list);
      		return id_list;
        });
}

getTaskIdsOfMember("User4");

// ================ Issues ================

function addIssueToProject(projectId, name, description, priority, difficulty) {
    let sql = "INSERT INTO issue (project_id, name, description, priority, difficulty) VALUES ("
    .concat("'", projectId, "','", name, "','", description, "','", priority, "','", difficulty, ")");
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("New issue added");
    });
}

function getAllProjectIssues(project_id){
	let sql = "SELECT id FROM issue WHERE project_id = '"
		.concat(project_id, "\'");
		console.log(sql);
		con.query(sql, function (err, result) {
		    	if (err) throw err;
			let id_list = [];
			for(let i = 0; i < result.length; i++){
				id_list.push(result[i].id);
			}
			console.log(id_list);
	      		return id_list;
		});
}

function deleteIssue(issueId) {
	let sql = "DELETE FROM issue WHERE id = '"
	.concat(issueId, "'");
	console.log(sql);
	con.query(sql, function (err, result) {
	    if (err) throw err;
	    console.log("Issue removed");
	});
}



// ================ Tasks ================

function addTask(projectId, name, description, state, date_beginning, realisation_time, DoD, dependancies /*list int*/,members /*list User*/) {
    	let sql = "INSERT INTO task (project_id, name, description, state, start_date, realisation_time, description_of_done) VALUES ("
	.concat(
	"'", projectId, "'", ',', 
	"'", name, "'", ',',
	"'", description, "'", ',',
	"'", state, "'", ',',
	"'", date_beginning, "'", ',',
	"'", realisation_time, "'", ',',
	"'", DoD, "'" , ');');
	console.log(sql);
	con.query(sql, function (err, result) {
	if (err) throw err;
	console.log("New task added");
	});
}
//addTask(2, "Task1", "Blablablabla", "DOING", "2019-05-05", 10, "DoD is a lot");

function setTaskDependencies(taskId, dependsOnTasksIdList){
	var sql = "";
	for(let i = 0; i < dependsOnTasksIdList.length; i++){
		sql = sql.concat("INSERT INTO task_dependencies (task_id, depend_on_task_id) VALUES (",
		"'", taskId, "'", ',',
		"'", dependsOnTasksIdList[0], "'", '); \n' );
	}
	console.log(sql);
	con.query(sql, function (err, result) {
	if (err) throw err;
	console.log("New dependencies added");
	});
}

function setTaskToMembers(taskId, usernameList) {
	let i;
	let sql = "";
	for (i = 0; i < usernameList.length; i++) { 
		sql = sql.concat("INSERT INTO assigned_task (task_id, username) VALUES ('",
		taskId, "','", usernameList[i], "'",');\n');

	}
	console.log(sql);
	con.query(sql, function (err, result) {
	if (err) throw err;
	console.log("Task assigned to members");
	});
}

function getTaskDependencies(taskId) {
	// TODO: Vérifier si le couple user/project_id n'existe pas déjà
    let sql = "SELECT depend_on_task_id FROM task_dependancies WHERE task_id = '"
        .concat(taskId, "\'");
        console.log(sql);
        con.query(sql, function (err, result) {
            	if (err) throw err;
		let id_list = [];
		for(let i = 0; i < result.length; i++){
			id_list.push(result[i].task_id);
		}
		console.log(id_list);
      		return id_list;
        });
}


//INSERT INTO task (id, project_id, name, description, state, start_date, realisation_time, description_of_done) VALUES (NULL, '2', 'rayan', 'blabla', 'TODO', '2019-11-06', '5', 'To finish :\r\n- First\r\n- Second');





