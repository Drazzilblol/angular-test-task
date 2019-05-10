"use strict";
let angular = require("angular");
require("angular-ui-bootstrap");
require("bootstrap-css-only/css/bootstrap.min.css");
let config = require("./appConfig");
require("./filters/filtersModule");
require("./components/componentsModule");
require("angular-translate");
require("angular-translate-loader-static-files");

require("./app.css");

angular.module("listApp", ["filters", "components", "ui.bootstrap", "pascalprecht.translate"])
    .config(["$translateProvider", config]);



