"use strict";
let numbersFilter = require("./numbersFilter");

module.exports = angular.module("filters", [])
    .filter("numbersFilter", numbersFilter);

