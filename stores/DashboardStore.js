/**
 * HackDash Native
 */
'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('EventEmitter');
var {BASE_URL} = require('../constants/HackdashConstants');

var DashboardStore = Object.assign({}, EventEmitter.prototype, {
  getAll: function() {
    return fetch(`${BASE_URL}/dashboards`).then(response => response.json());
  },

  getProjectsByDomain: function(domain) {
    return fetch(`${BASE_URL}/${domain}/projects`).then(response => response.json());
  }
});

module.exports = DashboardStore;
