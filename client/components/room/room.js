'use strict';

// Imports
var angular = require('angular');
var RoomCtrl = require('./controllers/roomCtrl');

// Home sub-module definition
var room = angular.module('app.room', []);
room.controller('RoomCtrl', ['$routeParams', RoomCtrl]);

module.exports = room;