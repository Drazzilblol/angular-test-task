"use strict";
import angular from "angular";
import angulartr from "angular-translate";
import angulartrstaticfiles from "angular-translate-loader-static-files";
import config from "./appConfig";
import filters from "./filters/filtersModule";
import components from "./components/componentsModule";

import css from "./app.css";

angular.module("listApp", ["filters", "components"])
    .config(["$translateProvider", config]);



