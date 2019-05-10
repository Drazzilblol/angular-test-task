"use strict"
let stringAdd = require("./string-add/stringAddController");
let stringListContainer  = require("./string-list-container/stringListContainerController");
let language  = require("./language/languageController");
let stringList = require('./string-list/stringListController');

module.exports = angular.module('components', [])
    .component("stringsList", stringList)
    .component("stringAdd", stringAdd)
    .component("stringsListContainer", stringListContainer)
    .component("language", language);

