"use strict";

module.exports = {
    template: require("./languageTemplate.html"),
    controller: function languageController($translate) {
        this.selected = "en";
        this.changeLanguage = function () {
            $translate.use(this.selected);
        };

        this.languages = require("./locales.js").locales;
    },
};
