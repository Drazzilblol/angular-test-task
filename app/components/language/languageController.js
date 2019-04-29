"use strict";

module.exports = {
    template: require("./languageTemplate.html"),
    controller: function languageController($translate, $uibModal) {
        let languages = require("./languages.js");

        this.open = function () {

            $uibModal.open({
                animation: false,
                template: require("./dialogTemplate.html"),
                controllerAs: "ctrl",
                controller: ModalInstanceCtrl,
                resolve: {
                    languages: function () {
                        return languages;
                    }
                }
            })
                .result.then(
                (result) => {
                    if (result) $translate.use(result)
                },
                (err) => console.log(err)
            );

            function ModalInstanceCtrl($uibModalInstance, languages) {

                this.languages = languages.languagesList;
                this.selected = languages.defaultLanguage;

                this.ok = function () {
                    $uibModalInstance.close(this.selected);
                };

                this.cancel = function () {
                    $uibModalInstance.close();
                };
            };
        }

    }
}
