## Functions

<dl>
<dt><a href="#_createProject">_createProject(name, description, userGitHub, repositoryGitHub)</a> ÔçÆ</dt>
<dd><p>Returns a promise that insert a new Project in the database.</p>
</dd>
<dt><a href="#_modifyProject">_modifyProject(projectId, name, description, userGitHub, repositoryGitHub)</a> ÔçÆ</dt>
<dd><p>Returns a promise that modify a project in the database based on the ID</p>
</dd>
<dt><a href="#_deleteProject">_deleteProject(id)</a> ÔçÆ</dt>
<dd><p>Returns a promise that delete a project from the database based on the ID</p>
</dd>
<dt><a href="#_inviteMembersToProject">_inviteMembersToProject(projectId, usernameList, areAdminsList)</a> ÔçÆ</dt>
<dd><p>Returns a promise that add in the database the list of members of a project and whether they are and admin of it or not.
Returns an error if usernameList and areAdminsList have different size.</p>
</dd>
<dt><a href="#_deleteMembersFromProject">_deleteMembersFromProject(projectId, usernameList)</a> ÔçÆ</dt>
<dd><p>Returns a promise that delete a list of members from a project in the database</p>
</dd>
<dt><a href="#_getMembersOfProject">_getMembersOfProject(project_id)</a> ÔçÆ</dt>
<dd><p>Returns a promise that select the members of a project from the database</p>
</dd>
<dt><a href="#_getAdminsOfProject">_getAdminsOfProject(project_id)</a> ÔçÆ</dt>
<dd><p>Returns a promise that select the members of a project that are admins from the database</p>
</dd>
<dt><a href="#_storeMember">_storeMember(username, password)</a> ÔçÆ</dt>
<dd><p>Returns a promise which insert a new app user in the database. 
This method encrypt the passwords using bcrypt before sending them</p>
</dd>
<dt><a href="#_getProjectsIdsOfMember">_getProjectsIdsOfMember(username)</a> ÔçÆ</dt>
<dd><p>Returns a promise which get the id of the project which the user is part of</p>
</dd>
<dt><a href="#_getProjectFromProjectId">_getProjectFromProjectId(project_id)</a> ÔçÆ</dt>
<dd><p>Returns a new promise which returns all the informations of a project from the database
Members of the project are obtained through the _getMembersOfProject method
Admins of the project are obtains through the _getAdminsOfProject method</p>
</dd>
<dt><a href="#_getProjectsOfMember">_getProjectsOfMember(username)</a> ÔçÆ</dt>
<dd><p>Returns a promise which gets all the projects of a member from the database</p>
</dd>
<dt><a href="#_getTaskIdsAssignedToMember">_getTaskIdsAssignedToMember(username)</a> ÔçÆ</dt>
<dd><p>Returns a promise which select the ids of the tasks assingned to a member from the database</p>
</dd>
<dt><a href="#_areUsernameAndPasswordCorrect">_areUsernameAndPasswordCorrect(username, password)</a> ÔçÆ</dt>
<dd><p>Returns a promise which check if the credentials entered exist in the database</p>
</dd>
<dt><a href="#_doesUsernameExists">_doesUsernameExists(username)</a> ÔçÆ</dt>
<dd><p>Returns a promise which checks if a username already exists in the database</p>
</dd>
<dt><a href="#_deleteMember">_deleteMember(username)</a> ÔçÆ</dt>
<dd><p>Returns a promise, which delete a member from the database</p>
</dd>
<dt><a href="#_addIssueToProject">_addIssueToProject(projectId, name, description, priority, difficulty)</a> ÔçÆ</dt>
<dd><p>Returns a promise that adds an issue in the database</p>
</dd>
<dt><a href="#_modifyIssue">_modifyIssue(issueId, name, description, priority, difficulty)</a> ÔçÆ</dt>
<dd><p>Returns a promise that modify an issue in the database</p>
</dd>
<dt><a href="#_getAllProjectIssues">_getAllProjectIssues(project_id)</a> ÔçÆ</dt>
<dd><p>Returns a promise that gets all the informations of all the issues of a project from the database</p>
</dd>
<dt><a href="#_deleteIssue">_deleteIssue(issueId)</a> ÔçÆ</dt>
<dd><p>Returns a promise that deletes an issue from the database</p>
</dd>
<dt><a href="#_getIssueById">_getIssueById(issueId)</a> ÔçÆ</dt>
<dd><p>Returns a promise which returns all the informations of an issue from the database</p>
</dd>
<dt><a href="#_getAllTasksIdsByProject">_getAllTasksIdsByProject(project_id)</a> ÔçÆ</dt>
<dd><p>Returns a promise which gets all the task ids of a project from the database</p>
</dd>
<dt><a href="#_getAllTasksIdsByProjectAndState">_getAllTasksIdsByProjectAndState(project_id, state)</a> ÔçÆ</dt>
<dd><p>Returns a promise which gets all the task ids of a project which are in a specific state from the database</p>
</dd>
<dt><a href="#_getTaskById">_getTaskById(task_id)</a> ÔçÆ</dt>
<dd><p>Returns a promise that gets all the informations of a task from the database</p>
</dd>
<dt><a href="#_getAllTasksOfProject">_getAllTasksOfProject(project_id)</a> ÔçÆ</dt>
<dd><p>Returns a promise that get all the informations regardings the tasks of a project from the database</p>
</dd>
<dt><a href="#_getAllTasksOfProjectByState">_getAllTasksOfProjectByState(project_id, state)</a> ÔçÆ</dt>
<dd><p>Returns a promise that returns all informations of the tasks of a project that are in a specific state from the database</p>
</dd>
<dt><a href="#_addTask">_addTask(projectId, name, description, state, date_beginning, realisation_time, DoD, dependencies, members, issues)</a> ÔçÆ</dt>
<dd><p>Returns a promise that adds a task in the database</p>
</dd>
<dt><a href="#_modifyTask">_modifyTask(taskId, name, description, state, date_beginning, realisation_time, DoD)</a> ÔçÆ</dt>
<dd><p>Returns a promise that modify a task in the database</p>
</dd>
<dt><a href="#_setTaskDependencies">_setTaskDependencies(taskId, dependsOnTasksIdList)</a> ÔçÆ</dt>
<dd><p>Returns a promise which acutalize the dependencies of a task in the database (DELETE existing ones then INSERT current ones)</p>
</dd>
<dt><a href="#_setTaskToMembers">_setTaskToMembers(taskId, usernameList)</a> ÔçÆ</dt>
<dd><p>Returns a promise which actualize the list of members assigned to a task in the database (DELETE existing ones then INSERT current ones)</p>
</dd>
<dt><a href="#_getMembersAssignedToTask">_getMembersAssignedToTask(taskId)</a> ÔçÆ</dt>
<dd><p>Returns a promise that gets the list of members assigned to a task from the database</p>
</dd>
<dt><a href="#_getTaskDependencies">_getTaskDependencies(taskId)</a> ÔçÆ</dt>
<dd><p>Returns a promise that gets the task dependencies from the database</p>
</dd>
<dt><a href="#_getTasksIdsOfIssues">_getTasksIdsOfIssues(issueIdList)</a> ÔçÆ</dt>
<dd><p>Returns a promise that get from the database a list of tasks id related to selected issues.</p>
</dd>
<dt><a href="#_getTasksOfIssues">_getTasksOfIssues(issueIdList)</a> ÔçÆ</dt>
<dd><p>Returns a promise that get from the database all the informations abou the tasks related to a list of issues</p>
</dd>
<dt><a href="#_updateTaskState">_updateTaskState(taskId, state)</a> ÔçÆ</dt>
<dd><p>Returns a promise that update the state of a task in the database</p>
</dd>
<dt><a href="#_deleteTask">_deleteTask(taskId)</a> ÔçÆ</dt>
<dd><p>Returns a promise that delete a task from the database</p>
</dd>
<dt><a href="#_setTaskToIssue">_setTaskToIssue(task_id, issueId_list)</a> ÔçÆ</dt>
<dd><p>Returns a promise that set in the database a task to a list of issues</p>
</dd>
<dt><a href="#_getIssuesIdsOfTask">_getIssuesIdsOfTask(task_id)</a> ÔçÆ</dt>
<dd><p>Returns a promise that gets the list of issues linked to a specific task from the database</p>
</dd>
<dt><a href="#_getIssuesOfTask">_getIssuesOfTask(task_id)</a> ÔçÆ</dt>
<dd><p>Returns a promise that gets all the informations related to the issues linked to a task from the database</p>
</dd>
<dt><a href="#_setTaskChecklist">_setTaskChecklist(taskId, description, isDone)</a> ÔçÆ</dt>
<dd><p>Returns a promise that add in the database a checklist for a task.</p>
</dd>
<dt><a href="#_modifyTaskDescription">_modifyTaskDescription(checklistId, description)</a> ÔçÆ</dt>
<dd><p>Returns a promise that modify the description of a checklist in the database</p>
</dd>
<dt><a href="#_modifyTaskState">_modifyTaskState(checklistId, isDone)</a> ÔçÆ</dt>
<dd><p>Returns a promise which modify the state of a checklist in the database</p>
</dd>
<dt><a href="#_getTaskChecklist">_getTaskChecklist(task_id)</a> ÔçÆ</dt>
<dd><p>Returns a promise that get the checklists of a task in the database</p>
</dd>
<dt><a href="#_getChecklistItemById">_getChecklistItemById(itemId)</a> ÔçÆ</dt>
<dd><p>Returns a promise that get from the database an item of a checklist</p>
</dd>
<dt><a href="#_addTest">_addTest(projectId, name, description, expected_result, last_version_validated, state)</a> ÔçÆ</dt>
<dd><p>Returns a promise that add a test in the database</p>
</dd>
<dt><a href="#_getTestById">_getTestById(test_id)</a> ÔçÆ</dt>
<dd><p>Returns a promise that get from the database the informations regarding a test</p>
</dd>
<dt><a href="#_setIssuesToTest">_setIssuesToTest(test_id, issueId_list)</a> ÔçÆ</dt>
<dd><p>Returns a promise that links a test to a list of issues in the database</p>
</dd>
<dt><a href="#_getIssuesIdsOfTest">_getIssuesIdsOfTest(test_id)</a> ÔçÆ</dt>
<dd><p>Returns a promise that gets the list of issues linked to a test in the database</p>
</dd>
<dt><a href="#_getIssuesOfTest">_getIssuesOfTest(test_id)</a> ÔçÆ</dt>
<dd><p>Returns a promise that get from the database all the informations related to the issues linked to a specific test</p>
</dd>
<dt><a href="#_deleteTest">_deleteTest(test_id)</a> ÔçÆ</dt>
<dd><p>Returns a promise that delete a test from the database</p>
</dd>
<dt><a href="#_modifyTest">_modifyTest(testId, name, description, expected_result, last_version_validated, state)</a> ÔçÆ</dt>
<dd><p>Returns a promise which modify the informations related to a specific test in the database</p>
</dd>
<dt><a href="#_getAllTestsIdsFromProject">_getAllTestsIdsFromProject(project_id)</a> ÔçÆ</dt>
<dd><p>Returns a promise that gets every test id related to a project from the database</p>
</dd>
<dt><a href="#_getAllTestsFromProject">_getAllTestsFromProject(project_id)</a> ÔçÆ</dt>
<dd><p>Returns a promise that get all informations related to the tests of a project from the database</p>
</dd>
<dt><a href="#_updateTestState">_updateTestState(testId, state)</a> ÔçÆ</dt>
<dd><p>Returns a promise that update the state of a test in the database</p>
</dd>
<dt><a href="#_addSprint">_addSprint(project_id, objective, date_begin, date_end, issue_list, release_id)</a> ÔçÆ</dt>
<dd><p>Returns a promise that add a sprint into the database</p>
</dd>
<dt><a href="#_updateSprint">_updateSprint(sprint_id, objective, date_begin, date_end, issue_list)</a> ÔçÆ</dt>
<dd><p>Returns a promise that update a sprint informations in the database</p>
</dd>
<dt><a href="#_updateSprintRelease">_updateSprintRelease(sprint_id, release_id)</a> ÔçÆ</dt>
<dd><p>Returns a promise that update the release of a sprint in the database</p>
</dd>
<dt><a href="#_setIssuesToSprint">_setIssuesToSprint(sprint_id, issueId_list)</a> ÔçÆ</dt>
<dd><p>Returns a promise that actualise a list of issues to a sprint in the database (DELETE existing ones then INSERT current ones)</p>
</dd>
<dt><a href="#_deleteSprint">_deleteSprint(id)</a> ÔçÆ</dt>
<dd><p>Returns a promise that delete a sprint from the database</p>
</dd>
<dt><a href="#_getAllSprintFromProject">_getAllSprintFromProject(project_id)</a> ÔçÆ</dt>
<dd><p>Returns a promise that gets all the informations regarding the sprints of a specific project in the database</p>
</dd>
<dt><a href="#_getAllSprintIdsOfProject">_getAllSprintIdsOfProject(project_id)</a> ÔçÆ</dt>
<dd><p>Returns a promise that get every sprint if related to a project from the database</p>
</dd>
<dt><a href="#_getSprintById">_getSprintById(sprint_id)</a> ÔçÆ</dt>
<dd><p>Returns a promise that get all the information of a specific sprint from the database</p>
</dd>
<dt><a href="#_getIssuesIdsOfSprint">_getIssuesIdsOfSprint(sprint_id)</a> ÔçÆ</dt>
<dd><p>Returns a promise that get from the database every ids related to the issues of a specific sprint</p>
</dd>
<dt><a href="#_getIssuesOfSprint">_getIssuesOfSprint(sprint_id)</a> ÔçÆ</dt>
<dd><p>Returns a promise that get from the database every informations related to the issues of a specific sprint</p>
</dd>
<dt><a href="#_getReleaseIdOfSprint">_getReleaseIdOfSprint(sprint_id)</a> ÔçÆ</dt>
<dd><p>Returns a promise that get from the database the release id of a sprint</p>
</dd>
<dt><a href="#_addDocToRelease">_addDocToRelease(release_id, url)</a> ÔçÆ</dt>
<dd><p>Returns a promise that insert a new documentation to a release in the database</p>
</dd>
<dt><a href="#_updateDoc">_updateDoc(release_id, url)</a> ÔçÆ</dt>
<dd><p>Returns a promise that update the documentation to a release in the database</p>
</dd>
<dt><a href="#_getDocFromReleaseId">_getDocFromReleaseId(release_id)</a></dt>
<dd><p>Returns a promise that get the documentation informations of a release in the database</p>
</dd>
<dt><a href="#_getDocsFromReleases">_getDocsFromReleases(list_releases)</a> ÔçÆ</dt>
<dd><p>Returns a promise that get the documentation for a list of release from the database</p>
</dd>
<dt><a href="#_deleteDoc">_deleteDoc(release_id)</a> ÔçÆ</dt>
<dd><p>Returns a promise that remove a documentation related to a release from the database</p>
</dd>
<dt><a href="#_getCountIssuesProject">_getCountIssuesProject(projectId)</a> ÔçÆ</dt>
<dd><p>Returns a promise that gets from the database the amount of tasks related to every issue</p>
</dd>
<dt><a href="#_getCountIssuesLastSprint">_getCountIssuesLastSprint(projectId)</a> ÔçÆ</dt>
<dd><p>Returns a promise that gets from the database the amount of issues related to the last sprint</p>
</dd>
<dt><a href="#_getCountTasksStatesFromIssues">_getCountTasksStatesFromIssues(issueId)</a> ÔçÆ</dt>
<dd><p>Return a promise that get from the database the amount of task of an issue by each state</p>
</dd>
<dt><a href="#_getCurrentSprint">_getCurrentSprint(projectId)</a> ÔçÆ</dt>
<dd><p>Returns a promise which returns the id of the current sprint of a project</p>
</dd>
<dt><a href="#_getCountTasksStatesFromSprint">_getCountTasksStatesFromSprint(sprintId)</a> ÔçÆ</dt>
<dd><p>Returns a promise that get from the database the amount of tasks in an sprint and the amount of task in each state for a sprint</p>
</dd>
<dt><a href="#removeProject">removeProject(id, listProjects)</a></dt>
<dd><p>Remove a project from the list of the projects displayed</p>
</dd>
<dt><a href="#renderDescription">renderDescription(release)</a></dt>
<dd><p>Render the description of a release using the Markdown format.</p>
</dd>
<dt><a href="#getCurrentSprintId">getCurrentSprintId(sprints)</a> ÔçÆ</dt>
<dd><p>Returns the id of the current sprint, with a given sprint list.
This function compares the current day to the start and end dates of a sprint</p>
</dd>
<dt><a href="#isChecked">isChecked(req, listIssues)</a> ÔçÆ <code>Array</code></dt>
<dd><p>Return an array of the issues id of a list of issues that have been checked
by the user in the form.</p>
</dd>
<dt><a href="#changeStateTest">changeStateTest(req, res, newState)</a></dt>
<dd><p>Change the state of a test and update the display.</p>
</dd>
<dt><a href="#sprintIdChecked">sprintIdChecked(req, listSprints)</a> ÔçÆ <code>int</code></dt>
<dd><p>Return the id of the sprint checked by the user in the form.</p>
</dd>
<dt><a href="#isChecked">isChecked(req, listIssues)</a> ÔçÆ <code>Array</code></dt>
<dd><p>Return an array of the issues id of a list of issues that have been checked
by the user in the form.</p>
</dd>
<dt><a href="#removeMember">removeMember(username, listMembers)</a></dt>
<dd><p>Remove a membre from the list of the members displayed</p>
</dd>
<dt><a href="#turnToArray">turnToArray(data)</a> ÔçÆ <code>Array</code></dt>
<dd><p>Transform an objet into an Array.</p>
</dd>
<dt><a href="#getIssueState">getIssueState(taskStatus)</a> ÔçÆ <code>int</code></dt>
<dd><p>Determine if an issue is finished, ongoing or to do based on its tasks status.</p>
</dd>
<dt><a href="#removeMember">removeMember(username, listMembers)</a></dt>
<dd><p>Remove a membre from the list of the members displayed</p>
</dd>
</dl>

<a name="_createProject"></a>

## \_createProject(name, description, userGitHub, repositoryGitHub) ÔçÆ
Returns a promise that insert a new Project in the database.

**Kind**: global function  
**Returns**: new Promise, which returns the new project Id in the database  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>\*</code> | The project's name |
| description | <code>\*</code> | The project's description |
| userGitHub | <code>\*</code> | The user's github username |
| repositoryGitHub | <code>\*</code> | The project's github repository link |

<a name="_modifyProject"></a>

## \_modifyProject(projectId, name, description, userGitHub, repositoryGitHub) ÔçÆ
Returns a promise that modify a project in the database based on the ID

**Kind**: global function  
**Returns**: new Promise, which returns the number of affected rows  

| Param | Type | Description |
| --- | --- | --- |
| projectId | <code>\*</code> | The project's id in the database |
| name | <code>\*</code> | The new project's name |
| description | <code>\*</code> | The new projet's description |
| userGitHub | <code>\*</code> | The new user's github username |
| repositoryGitHub | <code>\*</code> | The new github repository's link |

<a name="_deleteProject"></a>

## \_deleteProject(id) ÔçÆ
Returns a promise that delete a project from the database based on the ID

**Kind**: global function  
**Returns**: new Promise, which returns the string 'Project Deleted' if it succeed  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>\*</code> | The projet's Id to delete |

<a name="_inviteMembersToProject"></a>

## \_inviteMembersToProject(projectId, usernameList, areAdminsList) ÔçÆ
Returns a promise that add in the database the list of members of a project and whether they are and admin of it or not.
Returns an error if usernameList and areAdminsList have different size.

**Kind**: global function  
**Returns**: new Promise, which returns the string 'Members added' if it succeeds  

| Param | Type | Description |
| --- | --- | --- |
| projectId | <code>\*</code> | The project's id of the project to add members |
| usernameList | <code>\*</code> | The list of members to add to the project |
| areAdminsList | <code>\*</code> | The areAdminsList[i] define if usernameList[i] is an admin |

<a name="_deleteMembersFromProject"></a>

## \_deleteMembersFromProject(projectId, usernameList) ÔçÆ
Returns a promise that delete a list of members from a project in the database

**Kind**: global function  
**Returns**: new Promise, which returns the string 'Members deleted' if it succeeds  

| Param | Type | Description |
| --- | --- | --- |
| projectId | <code>\*</code> | The projet's id which has members to remove |
| usernameList | <code>\*</code> | The list of users to remove from the project |

<a name="_getMembersOfProject"></a>

## \_getMembersOfProject(project_id) ÔçÆ
Returns a promise that select the members of a project from the database

**Kind**: global function  
**Returns**: new Promise, which returns the list of Id (only) of the members  

| Param | Type | Description |
| --- | --- | --- |
| project_id | <code>\*</code> | The id of the project we want the members |

<a name="_getAdminsOfProject"></a>

## \_getAdminsOfProject(project_id) ÔçÆ
Returns a promise that select the members of a project that are admins from the database

**Kind**: global function  
**Returns**: new Promise, which returns the list of Id (only) of the admins  

| Param | Type | Description |
| --- | --- | --- |
| project_id | <code>\*</code> | The id of the project we want the admins |

<a name="_storeMember"></a>

## \_storeMember(username, password) ÔçÆ
Returns a promise which insert a new app user in the database. 
This method encrypt the passwords using bcrypt before sending them

**Kind**: global function  
**Returns**: new Promise, which returns the id of the new user  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>\*</code> | The username of the new app user |
| password | <code>\*</code> | The password of the new app user |

<a name="_getProjectsIdsOfMember"></a>

## \_getProjectsIdsOfMember(username) ÔçÆ
Returns a promise which get the id of the project which the user is part of

**Kind**: global function  
**Returns**: new Promise, which returns the list of projects ids  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>\*</code> | The username of the user you want the projects |

<a name="_getProjectFromProjectId"></a>

## \_getProjectFromProjectId(project_id) ÔçÆ
Returns a new promise which returns all the informations of a project from the database
Members of the project are obtained through the _getMembersOfProject method
Admins of the project are obtains through the _getAdminsOfProject method

**Kind**: global function  
**Returns**: new Promise, which returns a new Project containing all the infos of a project  

| Param | Type | Description |
| --- | --- | --- |
| project_id | <code>\*</code> | The id of the project we get the infos from. |

<a name="_getProjectsOfMember"></a>

## \_getProjectsOfMember(username) ÔçÆ
Returns a promise which gets all the projects of a member from the database

**Kind**: global function  
**Returns**: new Promise, which returns a list of Projects objects  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>\*</code> | The username of the member for whom we get the projects |

<a name="_getTaskIdsAssignedToMember"></a>

## \_getTaskIdsAssignedToMember(username) ÔçÆ
Returns a promise which select the ids of the tasks assingned to a member from the database

**Kind**: global function  
**Returns**: new Promise, which returns a list of task ids  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>\*</code> | The username of the member for whom the tasks of |

<a name="_areUsernameAndPasswordCorrect"></a>

## \_areUsernameAndPasswordCorrect(username, password) ÔçÆ
Returns a promise which check if the credentials entered exist in the database

**Kind**: global function  
**Returns**: new Promise, which return true if the username and password are valid. False otherwise  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>\*</code> | The login username |
| password | <code>\*</code> | The login password |

<a name="_doesUsernameExists"></a>

## \_doesUsernameExists(username) ÔçÆ
Returns a promise which checks if a username already exists in the database

**Kind**: global function  
**Returns**: new Promise, which returns true if the username already exists, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>\*</code> | The username to check |

<a name="_deleteMember"></a>

## \_deleteMember(username) ÔçÆ
Returns a promise, which delete a member from the database

**Kind**: global function  
**Returns**: new Promise, which return a string 'Member deleted' if it succeeds.  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>\*</code> | The username of the members |

<a name="_addIssueToProject"></a>

## \_addIssueToProject(projectId, name, description, priority, difficulty) ÔçÆ
Returns a promise that adds an issue in the database

**Kind**: global function  
**Returns**: new Promise, which returns the Id of the newly added issue  

| Param | Type | Description |
| --- | --- | --- |
| projectId | <code>\*</code> | The id of the project related to the issue |
| name | <code>\*</code> | The name of the issue |
| description | <code>\*</code> | The description of the issue |
| priority | <code>\*</code> | The priority of the issue |
| difficulty | <code>\*</code> | The difficulty of the issue |

<a name="_modifyIssue"></a>

## \_modifyIssue(issueId, name, description, priority, difficulty) ÔçÆ
Returns a promise that modify an issue in the database

**Kind**: global function  
**Returns**: new Promise, which returns the number of modified issue  

| Param | Type | Description |
| --- | --- | --- |
| issueId | <code>\*</code> | The id of the issue to modify |
| name | <code>\*</code> | The new name of the issue |
| description | <code>\*</code> | The new description of the issue |
| priority | <code>\*</code> | The new priority of the issue |
| difficulty | <code>\*</code> | The new difficulty of the issue |

<a name="_getAllProjectIssues"></a>

## \_getAllProjectIssues(project_id) ÔçÆ
Returns a promise that gets all the informations of all the issues of a project from the database

**Kind**: global function  
**Returns**: new Promise, which returns a list of Issue objects  

| Param | Type | Description |
| --- | --- | --- |
| project_id | <code>\*</code> | The id of the project |

<a name="_deleteIssue"></a>

## \_deleteIssue(issueId) ÔçÆ
Returns a promise that deletes an issue from the database

**Kind**: global function  
**Returns**: new Promise, which returns a string 'Issue removed' if it succeeds  

| Param | Type | Description |
| --- | --- | --- |
| issueId | <code>\*</code> | The id of the issue to delete |

<a name="_getIssueById"></a>

## \_getIssueById(issueId) ÔçÆ
Returns a promise which returns all the informations of an issue from the database

**Kind**: global function  
**Returns**: new Promise, which returns an Issue object  

| Param | Type | Description |
| --- | --- | --- |
| issueId | <code>\*</code> | The Id of the issue |

<a name="_getAllTasksIdsByProject"></a>

## \_getAllTasksIdsByProject(project_id) ÔçÆ
Returns a promise which gets all the task ids of a project from the database

**Kind**: global function  
**Returns**: new Promise, which returns a list of the tasks ids  

| Param | Type | Description |
| --- | --- | --- |
| project_id | <code>\*</code> | The project id |

<a name="_getAllTasksIdsByProjectAndState"></a>

## \_getAllTasksIdsByProjectAndState(project_id, state) ÔçÆ
Returns a promise which gets all the task ids of a project which are in a specific state from the database

**Kind**: global function  
**Returns**: new Promise, which returns a list of the tasks ids  

| Param | Type | Description |
| --- | --- | --- |
| project_id | <code>\*</code> | The project id |
| state | <code>\*</code> | The state of the tasks (To Do/Doing/Done) |

<a name="_getTaskById"></a>

## \_getTaskById(task_id) ÔçÆ
Returns a promise that gets all the informations of a task from the database

**Kind**: global function  
**Returns**: new Promise, which returns a Task object  

| Param | Type | Description |
| --- | --- | --- |
| task_id | <code>\*</code> | The Id the task |

<a name="_getAllTasksOfProject"></a>

## \_getAllTasksOfProject(project_id) ÔçÆ
Returns a promise that get all the informations regardings the tasks of a project from the database

**Kind**: global function  
**Returns**: new Promise, which returns a list of Task objects  

| Param | Type | Description |
| --- | --- | --- |
| project_id | <code>\*</code> | The id of the project |

<a name="_getAllTasksOfProjectByState"></a>

## \_getAllTasksOfProjectByState(project_id, state) ÔçÆ
Returns a promise that returns all informations of the tasks of a project that are in a specific state from the database

**Kind**: global function  
**Returns**: new Promise, which returns a list of Task objects  

| Param | Type | Description |
| --- | --- | --- |
| project_id | <code>\*</code> | The id of the project |
| state | <code>\*</code> | The state of the tasks (To Do/Doing/Done) |

<a name="_addTask"></a>

## \_addTask(projectId, name, description, state, date_beginning, realisation_time, DoD, dependencies, members, issues) ÔçÆ
Returns a promise that adds a task in the database

**Kind**: global function  
**Returns**: new Promise, which returns the id of the new task  

| Param | Type | Description |
| --- | --- | --- |
| projectId | <code>\*</code> | The id of the project |
| name | <code>\*</code> | The name of the task |
| description | <code>\*</code> | The description of the task |
| state | <code>\*</code> | The state of the task |
| date_beginning | <code>\*</code> | The date the task has begun |
| realisation_time | <code>\*</code> | How long the task is supposed to take |
| DoD | <code>\*</code> | The definition of done of the task |
| dependencies | <code>\*</code> | Tasks that must be completed before this one |
| members | <code>\*</code> | The list of members assigned to the task |
| issues | <code>\*</code> | The list of issues related to this task |

<a name="_modifyTask"></a>

## \_modifyTask(taskId, name, description, state, date_beginning, realisation_time, DoD) ÔçÆ
Returns a promise that modify a task in the database

**Kind**: global function  
**Returns**: new Promise, which returns the number of affected rows  

| Param | Type | Description |
| --- | --- | --- |
| taskId | <code>\*</code> | The id of the task to modify |
| name | <code>\*</code> | The name of the task |
| description | <code>\*</code> | The description of the task |
| state | <code>\*</code> | The state of the task |
| date_beginning | <code>\*</code> | The date the task has begun |
| realisation_time | <code>\*</code> | How long the task is supposed to take |
| DoD | <code>\*</code> | The definition of done of the task |

<a name="_setTaskDependencies"></a>

## \_setTaskDependencies(taskId, dependsOnTasksIdList) ÔçÆ
Returns a promise which acutalize the dependencies of a task in the database (DELETE existing ones then INSERT current ones)

**Kind**: global function  
**Returns**: new Promise, which returns 'New dependencies added' if it succeeds  

| Param | Type | Description |
| --- | --- | --- |
| taskId | <code>\*</code> | The id of the task |
| dependsOnTasksIdList | <code>\*</code> | The list of task id that this task depends on |

<a name="_setTaskToMembers"></a>

## \_setTaskToMembers(taskId, usernameList) ÔçÆ
Returns a promise which actualize the list of members assigned to a task in the database (DELETE existing ones then INSERT current ones)

**Kind**: global function  
**Returns**: new Promise, which returns a string describing the result  

| Param | Type | Description |
| --- | --- | --- |
| taskId | <code>\*</code> | The id of the task |
| usernameList | <code>\*</code> | The list of members id assigned to the task |

<a name="_getMembersAssignedToTask"></a>

## \_getMembersAssignedToTask(taskId) ÔçÆ
Returns a promise that gets the list of members assigned to a task from the database

**Kind**: global function  
**Returns**: new Promise, which returns the list of members id  

| Param | Type | Description |
| --- | --- | --- |
| taskId | <code>\*</code> | The id of the task |

<a name="_getTaskDependencies"></a>

## \_getTaskDependencies(taskId) ÔçÆ
Returns a promise that gets the task dependencies from the database

**Kind**: global function  
**Returns**: new Promise, which returns a list of Task objects  

| Param | Type | Description |
| --- | --- | --- |
| taskId | <code>\*</code> | The id of the task |

<a name="_getTasksIdsOfIssues"></a>

## \_getTasksIdsOfIssues(issueIdList) ÔçÆ
Returns a promise that get from the database a list of tasks id related to selected issues.

**Kind**: global function  
**Returns**: new Promise, which returns a list of task ids  

| Param | Type | Description |
| --- | --- | --- |
| issueIdList | <code>\*</code> | The list of issues id |

<a name="_getTasksOfIssues"></a>

## \_getTasksOfIssues(issueIdList) ÔçÆ
Returns a promise that get from the database all the informations abou the tasks related to a list of issues

**Kind**: global function  
**Returns**: new Promise, which returns a list of Task objects  

| Param | Type | Description |
| --- | --- | --- |
| issueIdList | <code>\*</code> | The id list of issues |

<a name="_updateTaskState"></a>

## \_updateTaskState(taskId, state) ÔçÆ
Returns a promise that update the state of a task in the database

**Kind**: global function  
**Returns**: new Promise, which returns the amount of affected rows  

| Param | Type | Description |
| --- | --- | --- |
| taskId | <code>\*</code> | The id of the task |
| state | <code>\*</code> | The new state of the task |

<a name="_deleteTask"></a>

## \_deleteTask(taskId) ÔçÆ
Returns a promise that delete a task from the database

**Kind**: global function  
**Returns**: new Promise, which returns a string 'Issue removed' if it succeeds  

| Param | Type | Description |
| --- | --- | --- |
| taskId | <code>\*</code> | The id of the task |

<a name="_setTaskToIssue"></a>

## \_setTaskToIssue(task_id, issueId_list) ÔçÆ
Returns a promise that set in the database a task to a list of issues

**Kind**: global function  
**Returns**: new Promise, which returns a string describing the result  

| Param | Type | Description |
| --- | --- | --- |
| task_id | <code>\*</code> | The id of the task |
| issueId_list | <code>\*</code> | The list of ids of issues |

<a name="_getIssuesIdsOfTask"></a>

## \_getIssuesIdsOfTask(task_id) ÔçÆ
Returns a promise that gets the list of issues linked to a specific task from the database

**Kind**: global function  
**Returns**: new Promise, which returns the list of ids of the issues  

| Param | Type | Description |
| --- | --- | --- |
| task_id | <code>\*</code> | The id of the task |

<a name="_getIssuesOfTask"></a>

## \_getIssuesOfTask(task_id) ÔçÆ
Returns a promise that gets all the informations related to the issues linked to a task from the database

**Kind**: global function  
**Returns**: new Promise, which returns the liste of Issues objects  

| Param | Type | Description |
| --- | --- | --- |
| task_id | <code>\*</code> | The id of the task |

<a name="_setTaskChecklist"></a>

## \_setTaskChecklist(taskId, description, isDone) ÔçÆ
Returns a promise that add in the database a checklist for a task.

**Kind**: global function  
**Returns**: new Promise, which returns a string describing the result  

| Param | Type | Description |
| --- | --- | --- |
| taskId | <code>\*</code> | The id of the task |
| description | <code>\*</code> | The description of the checklist |
| isDone | <code>\*</code> | The state of the checklist |

<a name="_modifyTaskDescription"></a>

## \_modifyTaskDescription(checklistId, description) ÔçÆ
Returns a promise that modify the description of a checklist in the database

**Kind**: global function  
**Returns**: new Promise, which returns 'Chechlist modified' if it succeeds  

| Param | Type | Description |
| --- | --- | --- |
| checklistId | <code>\*</code> | The id of the checklist |
| description | <code>\*</code> | The new description of the checklist |

<a name="_modifyTaskState"></a>

## \_modifyTaskState(checklistId, isDone) ÔçÆ
Returns a promise which modify the state of a checklist in the database

**Kind**: global function  
**Returns**: new Promise, which returns the number of affected entries  

| Param | Type | Description |
| --- | --- | --- |
| checklistId | <code>\*</code> | The id of the checklist |
| isDone | <code>\*</code> | The new state of the checklist |

<a name="_getTaskChecklist"></a>

## \_getTaskChecklist(task_id) ÔçÆ
Returns a promise that get the checklists of a task in the database

**Kind**: global function  
**Returns**: new Promise, which returns the checklists ids and descriptions  

| Param | Type | Description |
| --- | --- | --- |
| task_id | <code>\*</code> | The id of the task |

<a name="_getChecklistItemById"></a>

## \_getChecklistItemById(itemId) ÔçÆ
Returns a promise that get from the database an item of a checklist

**Kind**: global function  
**Returns**: new Promise, which returns the informations of the intems (ids, descriptions, state)  

| Param | Type | Description |
| --- | --- | --- |
| itemId | <code>\*</code> | The id of the item |

<a name="_addTest"></a>

## \_addTest(projectId, name, description, expected_result, last_version_validated, state) ÔçÆ
Returns a promise that add a test in the database

**Kind**: global function  
**Returns**: new Promise, which returns the id of the newly added test  

| Param | Type | Description |
| --- | --- | --- |
| projectId | <code>\*</code> | The id of the project related to the test |
| name | <code>\*</code> | The name of the test |
| description | <code>\*</code> | The description of the test |
| expected_result | <code>\*</code> | The expected result of the test |
| last_version_validated | <code>\*</code> | The last version the test passed |
| state | <code>\*</code> | The current state of the test |

<a name="_getTestById"></a>

## \_getTestById(test_id) ÔçÆ
Returns a promise that get from the database the informations regarding a test

**Kind**: global function  
**Returns**: new Promise, which returns a Test obejct  

| Param | Type | Description |
| --- | --- | --- |
| test_id | <code>\*</code> | The id of the test |

<a name="_setIssuesToTest"></a>

## \_setIssuesToTest(test_id, issueId_list) ÔçÆ
Returns a promise that links a test to a list of issues in the database

**Kind**: global function  
**Returns**: new Promise, which returns a string describing the result  

| Param | Type | Description |
| --- | --- | --- |
| test_id | <code>\*</code> | The id of the test |
| issueId_list | <code>\*</code> | The list of issue ids |

<a name="_getIssuesIdsOfTest"></a>

## \_getIssuesIdsOfTest(test_id) ÔçÆ
Returns a promise that gets the list of issues linked to a test in the database

**Kind**: global function  
**Returns**: new Promise, which returns a list of issue ids  

| Param | Type | Description |
| --- | --- | --- |
| test_id | <code>\*</code> | The id of the test |

<a name="_getIssuesOfTest"></a>

## \_getIssuesOfTest(test_id) ÔçÆ
Returns a promise that get from the database all the informations related to the issues linked to a specific test

**Kind**: global function  
**Returns**: new Promise, which returns a list of Issue objects  

| Param | Type | Description |
| --- | --- | --- |
| test_id | <code>\*</code> | The id of the test |

<a name="_deleteTest"></a>

## \_deleteTest(test_id) ÔçÆ
Returns a promise that delete a test from the database

**Kind**: global function  
**Returns**: new Promise, which returns a string 'Test removed' if it succeeds  

| Param | Type | Description |
| --- | --- | --- |
| test_id | <code>\*</code> | The id of the test |

<a name="_modifyTest"></a>

## \_modifyTest(testId, name, description, expected_result, last_version_validated, state) ÔçÆ
Returns a promise which modify the informations related to a specific test in the database

**Kind**: global function  
**Returns**: new Promise, which returns the number of affected rows  

| Param | Type | Description |
| --- | --- | --- |
| testId | <code>\*</code> | The id of the test |
| name | <code>\*</code> | The new name of the test |
| description | <code>\*</code> | The new description of the test |
| expected_result | <code>\*</code> | The new expected result of the test |
| last_version_validated | <code>\*</code> | The new last version this test was validated |
| state | <code>\*</code> | The new state of the test |

<a name="_getAllTestsIdsFromProject"></a>

## \_getAllTestsIdsFromProject(project_id) ÔçÆ
Returns a promise that gets every test id related to a project from the database

**Kind**: global function  
**Returns**: new Promise, which returns the list of test ids  

| Param | Type | Description |
| --- | --- | --- |
| project_id | <code>\*</code> | The id of the project |

<a name="_getAllTestsFromProject"></a>

## \_getAllTestsFromProject(project_id) ÔçÆ
Returns a promise that get all informations related to the tests of a project from the database

**Kind**: global function  
**Returns**: new Promise, which returns a list of Test objects  

| Param | Type | Description |
| --- | --- | --- |
| project_id | <code>\*</code> | The id of the project |

<a name="_updateTestState"></a>

## \_updateTestState(testId, state) ÔçÆ
Returns a promise that update the state of a test in the database

**Kind**: global function  
**Returns**: new Promise, which returns the number of affected rows  

| Param | Type | Description |
| --- | --- | --- |
| testId | <code>\*</code> | The id of the test |
| state | <code>\*</code> | The new state of the test |

<a name="_addSprint"></a>

## \_addSprint(project_id, objective, date_begin, date_end, issue_list, release_id) ÔçÆ
Returns a promise that add a sprint into the database

**Kind**: global function  
**Returns**: new Promise, which returns the id of the newly added sprint  

| Param | Type | Description |
| --- | --- | --- |
| project_id | <code>\*</code> | The id of the project related to the sprint |
| objective | <code>\*</code> | The objective of the sprint |
| date_begin | <code>\*</code> | The date the sprint begins |
| date_end | <code>\*</code> | The date the sprint ends |
| issue_list | <code>\*</code> | The list of issues of the sprint |
| release_id | <code>\*</code> | The id of the release of the sprint |

<a name="_updateSprint"></a>

## \_updateSprint(sprint_id, objective, date_begin, date_end, issue_list) ÔçÆ
Returns a promise that update a sprint informations in the database

**Kind**: global function  
**Returns**: new Promise, which returns the number of affected rows  

| Param | Type | Description |
| --- | --- | --- |
| sprint_id | <code>\*</code> | The id of the sprint |
| objective | <code>\*</code> | The new objective of the sprint |
| date_begin | <code>\*</code> | The new date the sprint will begin |
| date_end | <code>\*</code> | The new date the sprint will end |
| issue_list | <code>\*</code> | The new list of issue linked |

<a name="_updateSprintRelease"></a>

## \_updateSprintRelease(sprint_id, release_id) ÔçÆ
Returns a promise that update the release of a sprint in the database

**Kind**: global function  
**Returns**: new Promise, which returns the number of affected rows  

| Param | Type | Description |
| --- | --- | --- |
| sprint_id | <code>\*</code> | The id of the sprint |
| release_id | <code>\*</code> | The id of the release |

<a name="_setIssuesToSprint"></a>

## \_setIssuesToSprint(sprint_id, issueId_list) ÔçÆ
Returns a promise that actualise a list of issues to a sprint in the database (DELETE existing ones then INSERT current ones)

**Kind**: global function  
**Returns**: new Promise, which returns a string 'Issues linked to sprint' if it succeeds  

| Param | Type | Description |
| --- | --- | --- |
| sprint_id | <code>\*</code> | The id of a sprint |
| issueId_list | <code>\*</code> | The list of issue ids |

<a name="_deleteSprint"></a>

## \_deleteSprint(id) ÔçÆ
Returns a promise that delete a sprint from the database

**Kind**: global function  
**Returns**: new Promise, which returns 'Project Deleted' if it succeeds  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>\*</code> | The id of the sprint |

<a name="_getAllSprintFromProject"></a>

## \_getAllSprintFromProject(project_id) ÔçÆ
Returns a promise that gets all the informations regarding the sprints of a specific project in the database

**Kind**: global function  
**Returns**: new Promise, which returns a list of Sprint objects  

| Param | Type | Description |
| --- | --- | --- |
| project_id | <code>\*</code> | The id of the project |

<a name="_getAllSprintIdsOfProject"></a>

## \_getAllSprintIdsOfProject(project_id) ÔçÆ
Returns a promise that get every sprint if related to a project from the database

**Kind**: global function  
**Returns**: new Promise, which returns a list of sprint ids  

| Param | Type | Description |
| --- | --- | --- |
| project_id | <code>\*</code> | The id of the project |

<a name="_getSprintById"></a>

## \_getSprintById(sprint_id) ÔçÆ
Returns a promise that get all the information of a specific sprint from the database

**Kind**: global function  
**Returns**: new Promise, which returns the id of a sprint  

| Param | Type | Description |
| --- | --- | --- |
| sprint_id | <code>\*</code> | The id of the sprint |

<a name="_getIssuesIdsOfSprint"></a>

## \_getIssuesIdsOfSprint(sprint_id) ÔçÆ
Returns a promise that get from the database every ids related to the issues of a specific sprint

**Kind**: global function  
**Returns**: new Promise, which returns a list of issue ids  

| Param | Type | Description |
| --- | --- | --- |
| sprint_id | <code>\*</code> | The id of the sprint |

<a name="_getIssuesOfSprint"></a>

## \_getIssuesOfSprint(sprint_id) ÔçÆ
Returns a promise that get from the database every informations related to the issues of a specific sprint

**Kind**: global function  
**Returns**: new Promise, which returns a list of Issue objects  

| Param | Type | Description |
| --- | --- | --- |
| sprint_id | <code>\*</code> | The id of the sprint |

<a name="_getReleaseIdOfSprint"></a>

## \_getReleaseIdOfSprint(sprint_id) ÔçÆ
Returns a promise that get from the database the release id of a sprint

**Kind**: global function  
**Returns**: new Promise, which returns a list of release ids  

| Param | Type | Description |
| --- | --- | --- |
| sprint_id | <code>\*</code> | The id of the sprint |

<a name="_addDocToRelease"></a>

## \_addDocToRelease(release_id, url) ÔçÆ
Returns a promise that insert a new documentation to a release in the database

**Kind**: global function  
**Returns**: new Promise, which returns the id of the newly added documentation  

| Param | Type | Description |
| --- | --- | --- |
| release_id | <code>\*</code> | The id of the release |
| url | <code>\*</code> | The link to the documentation |

<a name="_updateDoc"></a>

## \_updateDoc(release_id, url) ÔçÆ
Returns a promise that update the documentation to a release in the database

**Kind**: global function  
**Returns**: new Promise, which return the number of affected rows  

| Param | Type | Description |
| --- | --- | --- |
| release_id | <code>\*</code> | The id of the release |
| url | <code>\*</code> | The new link to the documentation |

<a name="_getDocFromReleaseId"></a>

## \_getDocFromReleaseId(release_id)
Returns a promise that get the documentation informations of a release in the database

**Kind**: global function  
**Result**: new Promise, which returns a new Doc object  

| Param | Type | Description |
| --- | --- | --- |
| release_id | <code>\*</code> | The id of a release |

<a name="_getDocsFromReleases"></a>

## \_getDocsFromReleases(list_releases) ÔçÆ
Returns a promise that get the documentation for a list of release from the database

**Kind**: global function  
**Returns**: new Promise, which return a list of Doc objects  

| Param | Type | Description |
| --- | --- | --- |
| list_releases | <code>\*</code> | The list of releases ids |

<a name="_deleteDoc"></a>

## \_deleteDoc(release_id) ÔçÆ
Returns a promise that remove a documentation related to a release from the database

**Kind**: global function  
**Returns**: new Promise, which returns a string 'Doc Deleted' if it succeeds  

| Param | Type | Description |
| --- | --- | --- |
| release_id | <code>\*</code> | The id of the release |

<a name="_getCountIssuesProject"></a>

## \_getCountIssuesProject(projectId) ÔçÆ
Returns a promise that gets from the database the amount of tasks related to every issue

**Kind**: global function  
**Returns**: new Project, which returns the result of the query  

| Param | Type | Description |
| --- | --- | --- |
| projectId | <code>\*</code> | The id of a project |

<a name="_getCountIssuesLastSprint"></a>

## \_getCountIssuesLastSprint(projectId) ÔçÆ
Returns a promise that gets from the database the amount of issues related to the last sprint

**Kind**: global function  
**Returns**: new Promise, which return the result of the query  

| Param | Type | Description |
| --- | --- | --- |
| projectId | <code>\*</code> | The id of the project |

<a name="_getCountTasksStatesFromIssues"></a>

## \_getCountTasksStatesFromIssues(issueId) ÔçÆ
Return a promise that get from the database the amount of task of an issue by each state

**Kind**: global function  
**Returns**: new Promise, which returns the result of the query (issueId, total, totalToDo, totalDoing, totalDone)  

| Param | Type | Description |
| --- | --- | --- |
| issueId | <code>\*</code> | The id of the issue |

<a name="_getCurrentSprint"></a>

## \_getCurrentSprint(projectId) ÔçÆ
Returns a promise which returns the id of the current sprint of a project

**Kind**: global function  
**Returns**: new Promise, which returns the result of the query  

| Param | Type | Description |
| --- | --- | --- |
| projectId | <code>\*</code> | The id of a project |

<a name="_getCountTasksStatesFromSprint"></a>

## \_getCountTasksStatesFromSprint(sprintId) ÔçÆ
Returns a promise that get from the database the amount of tasks in an sprint and the amount of task in each state for a sprint

**Kind**: global function  
**Returns**: new Promise, which returns the result of the query (sprintId, total, totalToDo, totalDoing, totalDone)  

| Param | Type | Description |
| --- | --- | --- |
| sprintId | <code>\*</code> | The id of the sprint |

<a name="removeProject"></a>

## removeProject(id, listProjects)
Remove a project from the list of the projects displayed

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>int</code> | The id of the project to remove. |
| listProjects | <code>Array</code> | The list of the projects of the user. The project will be removed from this list. |

<a name="renderDescription"></a>

## renderDescription(release)
Render the description of a release using the Markdown format.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| release | <code>object</code> | The release of which we want to display the description. |

<a name="getCurrentSprintId"></a>

## getCurrentSprintId(sprints) ÔçÆ
Returns the id of the current sprint, with a given sprint list.
This function compares the current day to the start and end dates of a sprint

**Kind**: global function  
**Returns**: new Promise, which returns the current sprint id.  

| Param | Type |
| --- | --- |
| sprints | <code>int</code> | 

<a name="isChecked"></a>

## isChecked(req, listIssues) ÔçÆ <code>Array</code>
Return an array of the issues id of a list of issues that have been checked
by the user in the form.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>object</code> | Used to get the issues checked by the user in the form. |
| listIssues | <code>Array</code> | The list of issues of the test. |

<a name="changeStateTest"></a>

## changeStateTest(req, res, newState)
Change the state of a test and update the display.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>object</code> | Used to get the issues checked by the user in the form. |
| res | <code>object</code> | Used to render the list of the tests. |
| newState | <code>string</code> | The new state of the test. |

<a name="sprintIdChecked"></a>

## sprintIdChecked(req, listSprints) ÔçÆ <code>int</code>
Return the id of the sprint checked by the user in the form.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>object</code> | Used to get the issues checked by the user in the form. |
| listSprints | <code>Array</code> | The list of the sprints of the project |

<a name="isChecked"></a>

## isChecked(req, listIssues) ÔçÆ <code>Array</code>
Return an array of the issues id of a list of issues that have been checked
by the user in the form.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| req | <code>object</code> | Used to get the issues checked by the user in the form. |
| listIssues | <code>Array</code> | The list of issues of the test. |

<a name="removeMember"></a>

## removeMember(username, listMembers)
Remove a membre from the list of the members displayed

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | The username of the member to remove. |
| listMembers | <code>Array</code> | The list of the members to add to the project. The member will be removed from this list. |

<a name="turnToArray"></a>

## turnToArray(data) ÔçÆ <code>Array</code>
Transform an objet into an Array.

**Kind**: global function  

| Param | Type |
| --- | --- |
| data | <code>object</code> | 

<a name="getIssueState"></a>

## getIssueState(taskStatus) ÔçÆ <code>int</code>
Determine if an issue is finished, ongoing or to do based on its tasks status.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| taskStatus | <code>\*</code> | The status of the tasks of the issue. |

<a name="removeMember"></a>

## removeMember(username, listMembers)
Remove a membre from the list of the members displayed

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | The username of the member to remove. |
| listMembers | <code>Array</code> | The list of the members to add to the project. The member will be removed from this list. |

