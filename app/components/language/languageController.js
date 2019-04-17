"use strict";
app.component("language", {
    templateUrl: "components/language/languageTemplate.html",
    controller: function languageController($translate, $http) {
        this.selected = "en";
        this.changeLanguage = function () {
            $translate.use(this.selected);
        };

        $http.get("../../locales/locales.json")
            .then(res => this.languages = res.data);
    },
});