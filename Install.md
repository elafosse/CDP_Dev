*(dernière modification : 3/12/2019)*

Installation
============

Installation
------------

Installation via docker :

* `docker-compose build`

Installation sans docker (necessite des pré-requis) :

* Récupérer la (dernière) release
* Dans CDP_dev : `npm install`

Si l'installation s'est bien déroulée, vous pourrez démarrer l'application à l'aide de `node CDP_Dev/cdp-gr1-eq7/backend/initApp.js`. 

Le message `App listening on port # !` apparaissant sur le terminal confirmera que l'application est bien lancée.

Pre-requis (pour l'installation sans docker)
----------

* NodeJS v10
* NPM v6

L'application peut fonctionner avec d'autres versions mais nous ne fournissons aucune garantie à ce propos.

Lancement de l'application
--------------------------

Lancer l'application avec Docker :

* `docker-compose up`

Pour executer l'application sans Docker, il suffit de lancer la commande `node` sur le fichier `initApp.js`

`node CDP_Dev/cdp-gr1-eq7/backend/initApp.js`

Configuration
-------------

**Modification du port :**
Pour modifier le port sur lequel s'execute l'application il suffit, dans le fichier `cdp-gr1-eq7/backend/initApp.js`, de modifier la constante `NUM_PORT` ligne 55. Par défaut, celle-ci est configurée sur le port.

**Modification de la base de donnée :**
La connexion à la base de donnée est configuée au début du fichier `cdp-gr1-eq7/backend/db_connection.js` dans la variable `con`. Les informations modifiables sont les suivantes :

* host : Adresse de la base de donnée
* port : Numéro du port utilisé pour acceder à la base de donnée
* database : Nom de la base de donnée à utiliser
* user : Nom d'utilisateur utilisé pour la connexion
* password : Mot de passe utilisé pour la connexion
* multiplestatement : Permet d'envoyer plusieurs requetes simultanément a la base de donnée. **Ne pas modifier car de nombreuses fonctions se reposent desus.**