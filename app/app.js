"use strict";
import angular from "angular";
import angulartr from "angular-translate";
import angulartrstaticfiles from "angular-translate-loader-static-files";
import config from "./appConfig";
import stringListContainer from "./components/string-list-container/stringListContainerController";
import stringList from "./components/string-list/stringListController";
import stringAdd from "./components/string-add/stringAddController";
import language from "./components/language/languageController";
import filters from "./filters/filtersModule";

import css from "./app.css";


angular.module("listApp", ["pascalprecht.translate", "filters"])
    .config(["$translateProvider", config])
    .component("stringAdd", stringAdd)
    .component("stringsListContainer", stringListContainer)
    .component("stringsList", stringList)
    .component("language", language);



