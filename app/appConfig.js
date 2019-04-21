"use strict";

module.exports = function ($translateProvider) {
    $translateProvider
        .useStaticFilesLoader({
            prefix: "locales/locale-",
            suffix: ".json"
        })
        .useSanitizeValueStrategy('sanitizeParameters')
        .preferredLanguage('en');
};




