/* CONFIG */
const express = require('express')
const app = express()

/* REQUIRED */
const path = require('path')
const ejs = require('ejs')
let bodyParser = require('body-parser')
const mysql = require('mysql')
const listProjects = require('./listProjects')
const project = require ('./classes/Project')

/* USE THE REQUIRES */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(listProjects.app)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './..', '/views'))

const NEW_PROJECT_ROUTE = '/new-project'
const PROJECT_OVERVIEW_ROUTE = '/project-overview'
const NEW_PROJECT_VIEW_PATH = '../views/newProject'
const PROJECT_OVERVIEW_VIEW_PATH = '../views/project'

app.get(NEW_PROJECT_ROUTE, function(req, res){
  res.render(NEW_PROJECT_VIEW_PATH)
})

app.get(PROJECT_OVERVIEW_ROUTE, function(req, res){
  res.render(PROJECT_OVERVIEW_PATH)
})

app.post(CREATE_PROJECT_ROUTE, function(req, res){
  // save the project in the db, update members list of projects in db etc
  res.render(PROJECT_OVERVIEW_VIEW_PATH)
})

module.exports.app = app