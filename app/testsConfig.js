"use strict";
import languages from "./components/language/languages.js";

import english from "./locales/locale-en";
import russian from "./locales/locale-ru";

export default function ($translateProvider) {
    $translateProvider.translations("en", english);
    $translateProvider.translations("ru", russian);
    $translateProvider.preferredLanguage(languages.defaultLanguage);
};




