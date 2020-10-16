//Import depedences / libs / libraries
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//Starting the express librarie
const server = express()
server

    //Using static files
    //Create a route of public files
    .use(express.static('public'))

    //Configure engineer template
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    //Create application routes
    .get('/', pages.index)
    .get('/orphanages', pages.orphanages)
    .get('/orphanage', pages.orphanage)
    .get('/create-orphanage', pages.createOrphanage)

//Turn on the server -> listen the port
server.listen(5500);



