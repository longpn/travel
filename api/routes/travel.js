var router = require('express').Router();
var Utilities = require('../utilities.js');
var uuid = require('node-uuid');
module.exports = travelAPI;

function travelAPI(app) {
    var dbconnection = app.get('dbpool');

    return router
}
