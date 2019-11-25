# Tasks du sprint 3

**Liste des tâches assignées au sprint 3 :**

| Id  | Description | Definition of Done | Etat | Durée | Issues | Dépendances| Développeur |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| T40 | Ajouter les champs pour la connexion au GitHub des releases dans la table des projets | <li>Champs " userGitHub " contenant le username du propriétaire du dépôt git<li>Champs " repositoryGitHub " contenant le nom du dépôt git<li>Mise à jour des fonctions de db_connection.js avec : <li>Ajout des champs " userGitHub " et " repositoryGitHub " dans " _createProject "<li>Ajout d'une fonction " _modifyProject " permettant de mettre à jour les champs d'un projet | Fait | 1 | I12, I13 | X | Estelle |
| T41 | Backend des releases | Création d'un fichier listReleases.js : Utilisation de l'API github-api pour : <li>Récupérer la liste des releases depuis le GitHub<li>Ajouter une release au GitHub quand on clique sur le bouton " Add release "<li>Modifier une release quand on clique sur le bouton " Edit release " de la release correspondante<li>Supprimer une release du GitHub quand on clique sur le bouton " Delete release " de la release correspondante<li>Changer de GitHub de release quand on clique sur un bouton " Set GitHUb "</li> | En cours | 1 | I12, I13 | X | Estelle |
| T42 | Frontend des releases | Une page " listReleases.ejs " contenant : Bouton " Set GitHub " qui affiche un formulaire avec : <li>Champ " user " pour entrer le username GitHub du propriétaire du dépôt git<li>Champ " repository name " pour entrer le nom du dépôt</li> Bouton " Add release " qui fait apparaître un formulaire avec : <li>Champ " Name "<li>Champ " Description " <li>Champ " Sprints " dans lequel on peut choisir une liste de sprints à lier à la release<li>Champ " Assets " dans lequel on peut ajouter les fichiers de la release<li>Champ " Documentation " dans lequel on peut entrer l'url de la documentation correspondant à la release.</li> Bouton " Edit release " à côté d'une release menant à une page " Edit release " Bouton " Delete release " à côté de chaque release permettant de la supprimer| En cours | X | I12, I13 | X | Estelle |
| T42 | CRUD des sprints | <li>Create sprint<li>Read sprint<li>Update sprint<li>Delete sprint | A faire | 1 |  | X | Rayan |
| T43 | Backend des sprints | | | | | | Rayan |
| T44 | Frontend des sprints | | | | | | Rayan |
| T45 | CRUD de la doc | <li>Create doc<li>Read doc<li>Update doc<li>Delete doc | | | | | Estelle |
| T46 | Backend de la doc | | | | | | Estelle |
| T47 | Frontend de la doc || | | | | Estelle |
| T48 | DB locale sur docker | <li>La base de donnée est disponible en local<li>Le projet utilise la base de donnée située localement| | | | | Rayan |
| T49 | Docker-compose | | | | | | Rayan |
| T50 | Travis | <li>Travis récupère les push<li>Travis peut executer les tests | Fait | 1 | X | T57, T58, T59 | Jimmy |
| T51 | Overview project | <li>Afficher les statistiques (done, doing, todo, total) de chaque partie du projet (Issues, tasks, sprints, .etc)| A faire | 1 | | | Jimmy |
| T52 | Frontend des settings d'un projet | Une page " projectSettings.ejs " contenant : <li>Champ " Name "<li>Champ " Description "<li>Champ " List members " permettant d'entrer un nom d'utilisateur et de l'ajouter à la liste des membres du projet en cliquant sur un bouton " Add member "<li>Liste des membres du projet<li> | A faire | 1 | I3, I4 | | Estelle |
| T53 | Notifications | | | | | | Jimmy |
| T54 | Burndown Chart  overview + sprint | <li>Créer un burndown chart via un package dispo sur node<li>Afficher le BDC dans l'overview et les sprints | A faire | 1 | | | Jimmy |
| T55 | Pages dynamiques bootstrap | <li>S'assurer que l'affichage des pages sont dynamiques | A faire | 1 | | | Estelle, Rayan, Jimmy |
| T56 | Statistiques d'un sprint | | | | | | Rayan |
| T57 | Tests unitaires | | | | | | Estelle, Rayan, Jimmy |
| T58 | Tests d'intégration | | | | | | Estelle, Rayan, Jimmy |
| T59 | Tests selenium | | | | | | Estelle, Rayan, Jimmy |
| T60 | Tout mettre en anglais | | | | | | Estelle, Rayan, Jimmy |
| T61 | Frontend édition d'une release | Une page modifyRelease.ejs contenant : <li>Champ " Name "<li>Champ " Description " <li>Champ " Sprints " dans lequel on peut choisir une liste de sprints à lier à la release<li>Champ " Assets " dans lequel on peut ajouter les fichiers de la release<li>Champ " Documentation " dans lequel on peut entrer l'url de la documentation correspondant à la release.</li> | A faire | 0,5 | I13 | X | Estelle |
| T62 | Backend édition d'une release | Fichier " modifyRelease.js " : mise à jour, dans le GitHub, de la release éditée en récupérant les informations entrées par l'utilisateur dans les différents champs de " modifyRelease.ejs " | A faire | 0,5 | I13 | X | Estelle |
