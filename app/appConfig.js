"use strict";

let languages = require("./components/language/languages.js");

module.exports = function ($translateProvider) {

    $translateProvider
        .useStaticFilesLoader({
            prefix: "locales/locale-",
            suffix: ".json"
        })
        .useSanitizeValueStrategy('sanitizeParameters')
        .preferredLanguage(languages.defaultLanguage);
};




