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

| Id  | Nom | Description | Difficulté | Priorité | Planification |
|---|:---:|:---|:---:|:---:|:---:|
| **I0**  |      Création d'un compte     |**En tant que** visiteur, **je souhaite** créer un compte sur le site en cliquant sur un bouton "Inscription" **afin de** pouvoir m'inscrire dans la base de donnée et me connecter par la suite. La page de création d'un compte doit me demander : <li> un nom d'utilisateur unique sous forme de chaîne de caractères (20 char max) <li> un mot de passe sous forme de chaîne de caractères.</li>|     13     |   Basse  |  1  |
| **I1**  |           Connexion/Déconnexion           |**En tant que** visiteur, **je souhaite** me connecter à mon compte en cliquant sur un bouton "Connection" **afin d**'avoir accès à mes projets et me déconnecter en cliquant sur un bouton "Déconnexion". La page de connexion doit me demander : <li> mon nom d'utilisateur unique sous forme de chaîne de caractères. <li> un mot de passe sous forme de chaîne de caractères. <li> Un message d'erreur doit apparaître si le couple nom d'utilisateur/mot de passe entré ne correspond à aucun compte.</li>|      8     |   Basse  |  1  |
| **I2**  |       Création de projet      |**En tant que** connecté, **je souhaite** pouvoir créer un projet **afin qu**'il soit disponible dans ma liste de projets en spécifiant : <li> un nom <li> une description <li> en ajoutant des membres</li>|      5     |   Haute  |  1  |
| **I3**  |     Invitation/Suppression de membres     |**En tant que** créateur du projet, **je souhaite** pouvoir inviter d'autres membres à mon projet lors de sa création, ou ultérieurement **afin qu**'ils puissent avoir acces à celui-ci et participer à son avancement, en : <li> cliquant sur un bouton "Ajouter un membre" </li> <li>  spécifiant son nom d'utilisateur </li> et supprimer un membre de mon projet en cliquant sur un bouton "Supprimer" à coté du nom du membre à supprimer. Après sa suppression, un membre n'a plus accès à la vue du projet. |      5     |   Basse  |  2  |
| **I4**  | Liste des membres d'un projet |**En tant que** créateur du projet, **je souhaite** avoir accès à la liste des membres du projet **afin de** pouvoir supprimer ou ajouter un membre au projet.|      5     |   Basse  |  2  |
| **I5**  | Liste des projets d'un membre |**En tant que** connecté, **je souhaite** avoir accès à une liste des projets auxquels je suis inscrit **afin de** pouvoir accéder/modifier leur contenu. Je n'ai accès qu'aux projets auxquels j'ai été invité.|      5     |   Basse  |  2  |
| **I6**  |  Liste des issues d'un projet/sprint |**En tant que** membre d'un projet, **je souhaite** pouvoir accéder à la liste des issues d'un projet, et la liste des issues d'un sprint sélectionné **afin de** voir l'avancement du projet/sprint et de pouvoir ajouter, modifier ou supprimer des issues du projet/sprint.|      5     |   Haute  |  1  |
| **I7**  |        Création/Modification/Suppression d'Issues       |**En tant que** membre d'un projet et en étant sur la liste des issues d'un projet, **je souhaite** pouvoir créer une Issue en cliquant sur "Ajouter Issue" qui ouvre un formulaire me permettant de spécifier : <li> un nom <li> une description <li> une priorité  <li> une difficulté (l'id sera créé automatiquement)</li> Modifier une issue en cliquant sur "Modifier" à coté de l'issue concernée, et de spécifier les nouvelles valeurs des champs, et supprimer une issue en cliquant sur le bouton "Supprimer" à coté de l'issue à supprimer, puis en confirmant mon choix **afin de** permettre aux autres membres du projet de la voir et l'ajouter à un sprint pour pouvoir la découper en tâches.|      5     |   Haute  |  1  |
| **I8** |        Liste des tâches       |**En tant que** membre d'un projet, **je souhaite** pouvoir accéder à la liste des taches d'un projet auxquel j'ai été invité sous forme de tableau avec  <li> les tâches à faire <li> les tâches en cours <li> les tâches terminées.</li> **afin de** connaître l'avancement des tâche du projet que j'ai séléctionné.|      5     |   Haute  |  1  |
| **I9** |        Créer/Modifier/Supprimer une tâche        |**En tant que** membre d'un projet et étant sur la liste des tâches de celui-ci, **je souhaite** pouvoir créer une nouvelle tâche en cliquant sur le bouton "Ajouter Tâche" puis en spécifiant : <li> son nom <li> sa description <li> son état <li> sa date de début <li> le temps nécessaire à sa réalisation <li> sa Definition of Done <li> les membres concernées par celle-ci <li> la/les liaison(s) à l'Id d'une ou plusieurs issues. <li> les tâches pré-requises à la réalisation de cette tâche </li> Modifier les détails de la tâche, puis confirmer les changements cliquant sur le bouton "Enregistrer", et supprimer une tâche cliquant sur le bouton "Supprimer", puis en confirmant mon choix **afin de** permettre aux autres membres du projet de la voir et pouvoir l'implémenter.|      8     |   Haute  |  1  |
| **I10** | Voir l'issue liée à une tâche |**En tant que** membre du projet, **je souhaite** pouvoir accéder à une Issue liée à une tâche **afin d'** avoir accès facilement à celle-ci en cliquant sur son Id dans les détails de la tâche concernée.|      3     |   Haute  |  1  |
| **I11** |      Détails d'une tâche      |**En tant que** membre du projet, **je souhaite** pouvoir accéder aux détails (nom, description, état, issues, temps, membres concernés, Definition of Done, les tâches pré-requises) d'une tâche en cliquant sur celle-ci **afin de** permettre à un membre du projet de la réaliser.|      5     |   Haute  |  1  |
| **I12** |       Liste des releases      |**En tant que** membre de projet, **je souhaite** avoir accès à une liste de releases existantes du projet **afin d'** avoir une vue de celles-ci, de leur nom et de la version concernée et de pouvoir accèder facilement à leur contenu.|      8     |   Basse  |  3  |
| **I13** |         Créer/Modifier/Supprimer Release         |**En tant que** membre de projet une fois sur la liste des releases, **je souhaite** pouvoir créer une release en appuyant sur le bouton "Créer Release" en spécifiant : <li> un nom <li> une description  <li> le lien vers la release <li> les issues auxquelles elle répond.</li> modifier une release en appuyant sur le bouton "Modifier Release" à coté de la release concernée, et supprimer une release en appuyant sur le bouton "Supprimer Release" à coté de la release concernée, puis en confirmant mon choix **afin d**' avoir une vue de celles-ci, de leur nom et de la version concernée et de pouvoir accèder facilement à leur contenu.|      5     |   Basse  |  3  |
| **I14** |    Liste de documentations    |**En tant que** membre du projet, **je souhaite** avoir accès à une liste de documentations disponibles du projet en sachant à quelle version elles correspondent **afin d**'être capable de comprendre et d'utiliser le logiciel facilement. Un lien doit être disponible pour télécharger le document.|     5     |   Basse  |  3  |
| **I15** |     Ajouter/Modifier/Supprimer Documentation     |**En tant que** membre du projet, **je souhaite** pouvoir ajouter de la documentation concernant une version released en cliquant sur un bouton "Ajouter Documentation" pour  <li> spécifier la version du logiciel <li> la lier à une release  <li> déposer le lien vers le document </li> modifier une documentation existante en cliquant sur un bouton "Modifier Documentation" permettant de remplacer une documentation par une autre et supprimer une documentation existante en cliquant sur un bouton "Supprimer Documentation" et en confirmant mon choix **afin d**'ajouter, modifier ou supprimer la documentation correspondant à une release.|     5     |   Basse  |  3  |
| **I16** |         Ajouter/Modifier/Supprimer Tests         |**En tant que** membre du projet, **je souhaite** pouvoir ajouter un tests dans la liste des tests à effectuer en appuyant sur un bouton "Ajouter Test", puis en spécifiant  <li> un nom <li> une description de la fonction à tester et du résultat attendu par celui-ci  <li> en le liant à une issue. <li> en précisant la dernière version pour laquelle le test a été validé </li> modifier un test en cliquant sur un bouton "Modifier Test" et supprimer un test en cliquant sur le bouton "Supprimer" à coté du test correspondant **afin de** pouvoir gérer facilement l'avancement des tests du projet auxquel j'appartient.|      5     |   Basse  |  2  |
| **I17** |   Modifier l'état d'un Test   |**En tant que** membre du projet, **je souhaite** pouvoir modifier l'état d'un test ("A coder" ou "Fait") **afin de** comprendre rapidement quels tests ont été faits, et ceux restant à coder dans l'application.|      8     |   Basse  |  2  |
| **I18** |       Liste des Sprints       |**En tant que** membre d'un projet, **je souhaite** pouvoir accéder à la liste des sprints d'un projet sous forme de tableau avec  <li> les sprint à faire <li> les sprint en cours <li> les sprint terminés </li> **afin de** connaître le nombre de sprints et leurs durées et de savoir quel sprint est en cours.| 5 | Basse    |  2  |
| **I19** |         Planification         |**En tant que** créateur du projet, **je souhaite** une page me permettant de planifier mon projet **afin de** spécifier rapidement les sprints et leurs issues. Cette page doit me demander : <li> Le nombre de sprints <li> La durée des sprints <li> Le nom d'un sprint est généré automatiquement sous la forme "Sprint N". Je dois être capable de lier facilement des User Stories existantes à un sprint en les selectionnant et en les ajoutant à un sprint.</li> | 8          | Basse    |  2  |
| **I20** |         Ajouter/Supprimer/Modifier Sprint        |**En tant que** créateur du projet, **je souhaite** pouvoir ajouter un sprint en appuyant sur un bouton "Ajouter Sprint", puis en spécifiant : <li> un identifiant <li> un nom <li> une description <li> une date de début <li> une durée <li> un état <li> ajouter des issues à la liste des issues à implémenter durant ce sprint en les sélectionnant en cochant les issues concernées <li> supprimer des issues de la liste des issues à implémenter durant ce sprint.</li> modifier un sprint en cliquant sur un bouton "Modifier" à côté du sprint correspondant, et supprimer un sprint en cliquant sur un bouton "Supprimer" puis en confirmant mon choix **afin de** permettre aux membres du projet de savoir quelles issues il faut implémenter prochainement, et suivre l'avancement du projet.| 8          | Basse    |  2  |
| **I21** |        Notification        |**En tant que** membre du projet **je souhaite** recevoir des notifications concernant <li> mon ajout à un projet <li> la fin d'un sprint <li> quand un sprint est créé</li> **afin de** suivre l'avancement des projets sur lesquels je travaille| 13          | Basse    |  3  |
| **I22** |        Compte rendu d'un sprint        |**En tant que** membre du projet **je souhaite** avoir accès à un compte rendu d'un sprint **afin de** savoir : <li> ce qui a été réalisé <li> ce qui n'a pas été réalisé <li> une description de l'avis du client <li> doit permettre à un membre d'exprimer les problèmes qu'il a rencontré <li> afficher le burndown chart du projet correspondant aux difficultés rencontrées <li> un lien vers les feuilles de release </li> Ce compte rendu peut-être étoffé et modifiable tout au long du sprint.  | 13          | Basse    |  2  |
| **I23** |        Mise en valeur des tâches réalisables        |**En tant que** membre du projet **je souhaite** lors de la création d'un sprint, que les tâches n'ayant pas de pré-requis, celles dont les pré-requis sont réalisés et les tâches en retard soient mises en valeur **afin de** m'aider à choisir facilement les tâches à ajouter dans un sprint | 8          | Basse    |  2  |
| **I24** |        Code couleur Tests        |**En tant que** membre du projet **je souhaite** que les tests bénéficient d'un code couleur concernant leur état **afin de** faciliter la vue globale  | 3          | Basse    |  2  |
| **I25** |        Checklist dans les Tâches        |**En tant que** membre d'un projet **je souhaite** qu'une checklist me permette de savoir les éléments restants à accomplir afin de compléter une tâche **afin de** savoir rapidement quels éléments il me reste à réaliser pour la finir.| 8         | Basse    |  1  |
| **I26** |        Accès Burndown Chart        |**En tant que** membre d'un projet **je souhaite** avoir accès a un Burndown Chart du projet **afin de** visualiser l'avancement du developpement de l'application.| 8         | Basse    |  3  |
| **I27** |        Remplissage du Burndown Chart        |**En tant que** créateur d'un projet **je souhaite** pouvoir remplir le Burndown Chart du projet, en y ajoutant à la fin de chaque sprint le nombre de difficultés que l'équipe à rencontré **afin de** visualiser plus facilement l'avancement du développement de l'application et de l'indiquer aux membres du projet.| 8         | Basse    |  3  |
| **I28** |        Pages dynamiques        |**En tant que** membre du projet **je souhaite** que le site soit responsif **afin qu**'il soit consultable sur n'importe quel écran| 13         | Basse    |  3  |
| **I29** |        Statistiques d'un sprint        |**En tant que** membre du projet **je souhaite** avoir accès aux statistiques d'un sprint avec une barre de progression concernant : les jours restant, les issues, les tasks, tests. Ces barres doivent indiquer le travail qui a été fait, et celui restant à faire **afin de** m'aider à planifier le reste du projet plus facilement. | 13         | Basse    |  3  |

