"use strict";

import languages from "./components/language/languages.js";

export default function ($translateProvider) {

    $translateProvider
        .useStaticFilesLoader({
            prefix: "locales/locale-",
            suffix: ".json"
        })
        .useSanitizeValueStrategy('sanitizeParameters')
        .preferredLanguage(languages.defaultLanguage);
};




