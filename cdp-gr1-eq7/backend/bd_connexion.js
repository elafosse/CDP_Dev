var mysql = require('mysql');
var bcrypt = require('bcrypt');

var con = mysql.createConnection({
    host: "www.remotemysql.com",
    user: "wjJ627V9qY",
    database: "wjJ627V9qY",
    password: "qpxKOx6Pe8"
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
    for (i = 0; i < usernameList.length; i++) { 
        let sql = "INSERT INTO project_team (project_id, username, is_admin) VALUES ("
        .concat("'", projectId, "','", usernameList[i], "'", ',', areAdminsList[i], ')');
        console.log(sql);
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Member ".concat(usernameList[i], ' added to project'));
        });
    }
}

function deleteMembersFromProject(projectId, usernameList) {
    let i;
    for (i = 0; i < usernameList.length; i++) { 
        //TODO: check if the user is not the admin of the project
        let sql = "DELETE FROM project_team WHERE "
        .concat("project_id = ", projectId, " and username = ", "'", usernameList, "'");
        console.log(sql);
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Member ".concat(usernameList[i], ' removed from project'));
        });
    }
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

// ================ Issues ================

function addIssue(projectId, name, description, priority, difficulty) {
    let sql = "INSERT INTO issue (project_id, name, description, priority, difficulty) VALUES ("
    .concat("'", projectId, "','", name, "','", description, "','", priority, "','", difficulty, ")");
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("New issue added");
    });
}
// "INSERT INTO `issue` (`id`, `project_id`, `name`, `description`, `priority`, `difficulty`) VALUES (NULL, '2', 'dzqdzdq', 'zdzqdzqd', 'dzdq', '15');"


// ================ Tasks ================

function addTask(projectId, name, description, state, date_beginning, realisation_time, DoD, dependancies /*list int*/,members /*list User*/) {
    let sql = "INSERT INTO project (name, description) VALUES (".concat("'", name, "'", ',', "'", description, "'",')');
    console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("New project added : (".concat(name, ',', description, ')'));
    });
}





//createMember("User 2", "password");
//storeMember("user1", "password");
//inviteMembersToProject(2, ["user1", "user2"], [true, false]);
//deleteMembersFromProject(2, ["user2"]);
addIssue(2, "Issue numéro 1", "Cette description concerne l'issue 1", "HIGH", 15); 