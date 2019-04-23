
let angular = require('angular');
let numbersFiter = require('./numbersFilter');

module.exports = angular.module('filters', [])
    .filter('numbersFilter', numbersFiter);

