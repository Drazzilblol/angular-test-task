let angular = require('angular');
let angulartr = require("angular-translate");
let angulartrstaticfiles = require("angular-translate-loader-static-files");

let stringAdd = require("./string-add/stringAddController");
let stringListContainer  = require("./string-list-container/stringListContainerController");
let language  = require("./language/languageController");
let stringList = require('./string-list/stringListController');


module.exports = angular.module('components', ["pascalprecht.translate"])
    .component("stringsList", stringList)
    .component("stringAdd", stringAdd)
    .component("stringsListContainer", stringListContainer)
    .component("language", language);
