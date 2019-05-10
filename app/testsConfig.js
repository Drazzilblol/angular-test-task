"use strict";

let english = require("./locales/locale-en");
let russian = require("./locales/locale-ru");

let languages = require("./components/language/languages.js");

module.exports = function ($translateProvider) {
    $translateProvider.translations("en", english);
    $translateProvider.translations("ru", russian);
    $translateProvider.preferredLanguage(languages.defaultLanguage);
};




