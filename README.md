# CDP_Dev
#Github for development

Group members:
* Kheloufi Rayan
* LAFOSSE Estelle
* MENAN Jimmy

Définitions
===
**Projet :** Un projet a un nom, une liste de membres, une liste d'issues, de tâches et une description.

**Issue :** Une issue est l'expression d'un besoin particulier. Dans une issue doit apparaître un id unique, un nom, une description, une priorité, une difficulté et un état (En attente de validation, à faire, en cours, finie).

**Tâche :** Une tâche décrit un travail qui va être effectué par un développeur dans l'objectif de réaliser une ou plusieurs issues. Une tâche comprend un nom, une description, est liée à une ou plusieurs issues, a un état (A faire, en cours, finie), est délimitée dans le temps (Date de début - Temps nécessaire à la réalisation), doit avoir une "Definition of Done" (spécifier exactement quand elle sera réalisée), une dépendance à la réalisation d'autres tâches si besoin, et son attribution à un membre du projet.

**Release :** Sur le site, une release aura un nom, une description, une date, les issues auxquelles elle répond, et contiendra un lien vers la release sur un dépôt.

**Documentation :** Documents donnant des informations concernant le logiciel. Notre projet soutiendra deux types de documentation : la documentation utilisateur et la documentation administrateur.

**Test :** Ici un test réfère à un objet "Test" comprenant un nom, une description de la fonction à tester, le résultat attendu par celui-ci, l'issue à laquelle il correspond, un état (A coder ou fait), et la dernière version pour laquelle le test a été validé.

**Sprint :** Issues à implémenter en un certain temps. Un sprint a un identifiant unique, un nom, une description, une date de début, une durée, un état (A faire, en cours ou terminé) et la liste des issues à implémenter.

---

| Id  | Nom | Description | Difficulté | Priorité |
|-----|:-----------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------:|:--------:|
| I0  |      Création d'un compte     |**En tant que** visiteur, **je souhaite** créer un compte sur le site en cliquant sur un bouton "Inscription" **afin de** pouvoir me connecter. La page de création d'un compte doit me demander : <li> un nom d'utilisateur unique sous forme de chaîne de caractères (20 char max) <li> un mot de passe sous forme de chaîne de caractères.|     13     |   Basse  |
| I1  |           Connexion           |**En tant que** visiteur, **je souhaite** me connecter à mon compte en cliquant sur un bouton "Connection" afin d'avoir accès à mes projets. La page de connexion doit me demander : <li> mon nom d'utilisateur unique sous forme de chaîne de caractères. <li> un mot de passe sous forme de chaîne de caractères. <li> Un message d'erreur doit apparaître si le couple nom d'utilisateur/mot de passe entré ne correspond à aucun compte.|      8     |   Basse  |
| I2  |          Déconnexion          | **En tant que** connecté, **je souhaite** pouvoir me déconnecter en cliquant sur un bouton "Déconnexion", **afin de** supprimer ma session en cours.|      1     |   Basse  |
| I3  |       Création de projet      |**En tant que** connecté, **je souhaite** pouvoir créer un projet en spécifiant : <li> un nom <li> une description <li> en ajoutant des membres|      5     |   Haute  |
| I4  |     Invitation de membres     |**En tant que** créateur du projet, **je souhaite** pouvoir inviter d'autres membres à mon projet en : <li> cliquant sur un bouton "Ajouter un membre" <li>  spécifiant son nom d'utilisateur|      5     |   Basse  |
| I5  | Liste des membres d'un projet |**En tant que** créateur du projet, **je souhaite** avoir accès à la liste des membres du projet.|      5     |   Basse  |
| I6  |      Supprimer un membre      |**En tant que** créateur du projet, **je souhaite** pouvoir supprimer un membre de mon projet en cliquant sur un bouton "Supprimer" à coté du nom d'un des membres de mon équipe dans la liste des membres du projet.|      5     |   Basse  |
| I7  | Liste des projets d'un membre |**En tant que** connecté, **je souhaite** avoir accès à une liste des projets auxquels je suis inscrit.|      5     |   Basse  |
| I8  |  Liste des issues d'un projet |**En tant que** membre d'un projet, **je souhaite** pouvoir accéder à la liste des issues d'un projet.|      5     |   Haute  |
| I9  |        Création d'Issue       |**En tant que** membre d'un projet et en étant sur la liste des issues d'un projet, **je souhaite** pouvoir créer une Issue en cliquant sur "Ajouter Issue" et en spécifiant : <li> un nom <li> une description <li> une priorité  <li> une difficulté (l'id sera créé automatiquement)|      5     |   Haute  |
| I10 |       Modifier une Issue      |**En tant que** membre d'un projet et en étant sur la liste des issues d'un projet, **je souhaite** pouvoir modifier une issue en cliquant sur "Modifier" à coté de l'issue concernée, et de spécifier les nouvelles valeurs des champs de I9.|      8     |   Haute  |
| I11 |      Supprimer une Issue      |**En tant que** membre d'un projet et en étant sur la liste des issues d'un projet, **je souhaite** pouvoir supprimer une issue en cliquant sur le bouton "Supprimer" à coté de l'issue à supprimer, puis en confirmant mon choix afin qu'elle soit définitivement supprimée du projet.|      3     |   Haute  |
| I12 |        Liste des tâches       |**En tant que** membre d'un projet, **je souhaite** pouvoir accéder à la liste des taches d'un projet sous forme de tableau avec  <li> les tâches à faire <li> les tâches en cours <li> les tâches terminées.|      5     |   Haute  |
| I13 |        Créer une tâche        |**En tant que** membre d'un projet et étant sur la liste des tâches, **je souhaite** pouvoir créer une nouvelle tâche en cliquant sur le bouton "Ajouter Tâche" puis en spécifiant : <li> son nom <li> sa description <li> son état <li> sa date de début <li> le temps nécessaire à sa réalisation <li> sa Definition of Done <li> les membres concernées par celle-ci <li> les autres tâches pré-requises <li> la/les liaison(s) à l'Id d'une ou plusieurs issues. <li> les tâches pré-requises à la réalisation de cette tâche                 |      8     |   Haute  |
| I14 | Voir l'issue liée à une tâche |**En tant que** membre du projet, **je souhaite** pouvoir accéder à une Issue liée à une tâche en cliquant sur son Id dans la description de la tâche afin d'avoir accès à l'issue rapidement.|      3     |   Haute  |
| I15 |      Détails d'une tâche      |**En tant que** membre du projet, **je souhaite** pouvoir accéder aux détails (nom, description, état, issues, temps, membres concernés, Definition of Done, les tâches pré-requises) d'une tâche en cliquant sur celle-ci.|      5     |   Haute  |
| I16 |      Supprimer une tâche      |**En tant que** membre du projet et une fois sur la description de la tâche, **je souhaite** pouvoir supprimer une tâche cliquant sur le bouton "Supprimer", puis en confirmant mon choix afin qu'elle soit définitivement supprimée du projet.|      3     |   Haute  |
| I17 |       Modifier une tâche      |**En tant que** membre du projet et une fois sur la description de la tâche, **je souhaite** pouvoir modifier les détails de la tâche, puis confirmer les changements cliquant sur le bouton "Enregistrer" **afin de** pouvoir modifier facilement le contenu d'une tache.|      8     |   Haute  |
| I18 |       Liste des releases      |**En tant que** membre de projet, **je souhaite** avoir accès à une liste de releases existantes.|      8     |   Basse  |
| I19 |         Créer Release         |**En tant que** membre de projet une fois sur la liste des releases, **je souhaite** pouvoir créer une release en appuyant sur le bouton "Créer Release" en spécifiant : <li> un nom <li> une description  <li> le lien vers la release <li> les issues auxquelles elle répond.|      5     |   Basse  |
| I20 |        Modifier Release       |**En tant que** membre du projet une fois sur la liste des releases, **je souhaite** pouvoir modifier une release en appuyant sur le bouton "Modifier Release" à coté de la release concernée, puis en modifiant les champs nécessaires (nom, description, lien vers la release sur un dépôt, issues auxquelles elle répond) avant de confirmer la modification.|      8     |   Basse  |
| I21 |       Supprimer Release       |**En tant que** membre du projet une fois sur la liste des releases, **je souhaite** pouvoir supprimer une release en appuyant sur le bouton "Supprimer Release" à coté de la release concernée, puis en confirmant mon choix.|      5     |   Basse  |
| I22 |    Liste de documentations    |**En tant que** membre du projet, **je souhaite** avoir accès à la documentation disponible du projet en sachant à quelle version elle correspond afin d'être capable de comprendre et d'utiliser le logiciel facilement.|     13     |   Basse  |
| I23 |     Ajouter Documentation     |**En tant que** membre du projet, **je souhaite** pouvoir ajouter de la documentation concernant une version released en cliquant sur un bouton "Ajouter Documentation" pour  <li> spécifier la version du logiciel <li> la lier à une release  <li> déposer le document |     13     |   Basse  |
| I24 |     Modifier Documentation    |**En tant que** membre du projet, **je souhaite** pouvoir modifier une documentation existante en cliquant sur un bouton "Modifier Documentation" permettant de remplacer une documentation par une autre.|     13     |   Basse  |
| I25 |    Supprimer Documentation    |**En tant que** membre du projet, **je souhaite** pouvoir supprimer une documentation existante en cliquant sur un bouton "Supprimer Documentation" et en confirmant mon choix.|      8     |   Basse  | 
| I26 |        Liste des tests        |**En tant que** membre du projet, **je souhaite** avoir accès à une liste des tests ayant été faits et ceux encore à faire **afin de** m'aider à comprendre l'avancement des tests dans le projet.|      5     |   Basse  | 
| I27 |         Ajouter Tests         |**En tant que** membre du projet, **je souhaite** pouvoir ajouter un tests dans la liste des tests à effectuer en appuyant sur un bouton "Ajouter Test", puis en spécifiant  <li> un nom <li> une description de la fonction à tester et du résultat attendu par celui-ci  <li> en le liant à une issue. <li> en précisant la dernière version pour laquelle le test a été validé|      5     |   Basse  |
| I28 |   Modifier l'état d'un Test   |**En tant que** membre du projet, **je souhaite** pouvoir modifier l'état d'un test ("A coder" ou "Fait") **afin de** comprendre rapidement quels tests ont été faits, et ceux restant à coder dans l'application.|      8     |   Basse  |
| I29 |         Modifier Test         |**En tant que** membre du projet et en étant sur la liste des tests, **je souhaite** pouvoir modifier un test en cliquant sur un bouton "Modifier Test" et en modifiant : <li> le nom <li> la description <li> la dernière version pour laquelle le test a été validé|      8     |   Basse  |
| I30 |         Supprimer Test        |**En tant que** membre de projet, **je souhaite** pouvoir supprimer un test en cliquant sur le bouton "Supprimer" à coté du test correspondant. |      3     |   Basse  |
| I31 |       Liste des Sprints       |**En tant que** membre d'un projet, **je souhaite** pouvoir accéder à la liste des sprints d'un projet sous forme de tableau avec  <li> les sprint à faire <li> les sprint en cours <li> les sprint terminés.| 5 | Basse    |
| I32 |         Ajouter Sprint        |**En tant que** membre du projet, **je souhaite** pouvoir ajouter un sprint en appuyant sur un bouton "Ajouter Sprint", puis en spécifiant : <li> un identifiant <li> un nom <li> une description <li> une date de début <li> une durée <li> un état <li> ajouter des issues à la liste des issues à implémenter durant ce sprint en les sélectionnant en cochant les issues concernées <li> supprimer des issues de la liste des issues à implémenter durant ce sprint.  | 8          | Basse    |
| I33 |        Supprimer Sprint       |**En tant que** membre du projet et en étant sur la liste des sprints, **je souhaite** pouvoir supprimer un sprint en appuyant sur un bouton " Supprimer " à côté du sprint correspondant.| 8          | Basse    |
| I34 |        Modifier Sprint        |**En tant que** membre du projet et en étant sur la liste des sprints, **je souhaite** pouvoir modifier un sprint en cliquant sur un bouton " Modifier " à côté du sprint correspondant, puis en spécifiant : <li> un identifiant <li> un nom <li> une description <li> une date de début <li> une durée <li> un état <li> ajouter des issues à la liste des issues à implémenter durant ce sprint <li> supprimer des issues de la liste des issues à implémenter durant ce sprint | 8          | Basse    |
| I35 |        Notification        |**En tant que** membre du projet **je souhaite** recevoir des notifications concernant <li> mon ajout à un projet <li> la fin d'un sprint <li> quand un sprint est créé | 13          | Basse    |
| I36 |        Compte rendu d'un sprint        |**En tant que** membre du projet **je souhaite** avoir accès à un compte rendu d'un sprint me permettant de savoir : <li> ce qui a été réalisé <li> ce qui n'a pas été réalisé <li> une description de l'avis du client | 13          | Basse    |
| I37 |        Mise en valeur des tâches réalisables        |**En tant que** membre du projet **je souhaite** lors de la création d'un sprint, que les tâches n'ayant pas de pré-requis, celles dont les pré-requis sont réalisés et les tâches en retard soient mises en valeur | 8          | Basse    |
| I38 |        Code couleur Tests        |**En tant que** membre du projet **je souhaite** que les tests bénéficient d'un code couleur concernant leur état  | 3          | Basse    |
| I39 |        Checklist dans les Tâches        |**En tant que** membre d'un projet **je souhaite** qu'une checklist me permette de savoir les éléments restants à accomplir afin de compléter une tâche | 8         | Basse    |
| I40 |        Burndown Chart        |**En tant que** membre d'un projet **je souhaite** avoir accès a un Burndown Chart du projet | 8         | Basse    |
| I41 |        Burndown Chart        |**En tant que** créateur d'un projet **je souhaite** pouvoir remplir le Burndown Chart du projet, en y ajouter à la fin de chaque sprint le nombre de difficultés que l'équipe à rencontré | 8         | Basse    |
| I42 |        Vue android        |**En tant que** membre du projet **je souhaite** avoir accès a la vue sur mon smartphone android du site| 13         | Basse    |




