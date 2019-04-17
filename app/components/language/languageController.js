'use strict';
app.component('language', {
    templateUrl: 'components/language/languageTemplate.html',
    controller: function languageController($translate, $http) {
        let self = this;
        self.selected = "en";
        self.changeLanguage = function () {
            $translate.use(this.selected);
        };

        $http.get("../../locales/locales.json")
            .then(function (res) {
                self.languages = res.data;
            });
    },
});