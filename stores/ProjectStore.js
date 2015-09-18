/**
 * HackDash Native
 */
'use strict';

var {BASE_URL} = require('../constants/HackdashConstants');
var EventEmitter = require('EventEmitter');

var ProjectStore = Object.assign({}, EventEmitter.prototype, {
  getAllByDomain: function(domain) {
    return fetch(`${BASE_URL}/${domain}/projects`).then(response => response.json());
  },
});

module.exports = ProjectStore;
