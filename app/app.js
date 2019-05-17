"use strict";

import "angular-ui-bootstrap";
import "bootstrap-css-only/css/bootstrap.min.css";
import config from "./appConfig";
import "./filters/filtersModule";
import "./components/componentsModule";
import "angular-translate";
import "angular-translate-loader-static-files";

import "./app.css";

angular.module("listApp", ["filters", "components", "ui.bootstrap", "pascalprecht.translate"])
    .config(["$translateProvider", config]);



