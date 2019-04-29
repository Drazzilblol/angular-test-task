let angular = require('angular');
require("angular-translate");
require("angular-translate-loader-static-files");
require("angular-ui-bootstrap");
require("bootstrap-css-only/css/bootstrap.min.css");

let stringAdd = require("./string-add/stringAddController");
let stringListContainer  = require("./string-list-container/stringListContainerController");
let language  = require("./language/languageController");
let stringList = require('./string-list/stringListController');

module.exports = angular.module('components', ["ui.bootstrap", "pascalprecht.translate"])
    .component("stringsList", stringList)
    .component("stringAdd", stringAdd)
    .component("stringsListContainer", stringListContainer)
    .component("language", language);
