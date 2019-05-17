"use strict";
import stringAdd from "./string-add/stringAddController";
import stringListContainer from "./string-list-container/stringListContainerController";
import language from "./language/languageController";
import stringList from './string-list/stringListController';

export default angular.module('components', [])
    .component("stringsList", stringList)
    .component("stringAdd", stringAdd)
    .component("stringsListContainer", stringListContainer)
    .component("language", language);

