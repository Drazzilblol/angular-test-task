"use strict";
let angular = require("angular");
require("angular-translate");
require("angular-translate-loader-static-files");
let config = require("./appConfig");
require("./filters/filtersModule");
require("./components/componentsModule");

require("./app.css");

angular.module("listApp", ["filters", "components"])
    .config(["$translateProvider", config]);



