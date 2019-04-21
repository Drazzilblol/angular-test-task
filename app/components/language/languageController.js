"use strict";

module.exports = {
    template: require("./languageTemplate.html"),
    controller: function languageController($translate) {
        let languages = require("./languages.js");
        this.languages = languages.languagesList;
        this.selected = languages.defaultLanguage;

        this.changeLanguage = function () {
            $translate.use(this.selected);
        };
    },
};
