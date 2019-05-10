"use strict";

module.exports = {
    template: require("./languageTemplate.html"),
    controller: function languageController($translate, $uibModal) {
        let languages = require("./languages.js");

        this.open = function () {

            $uibModal.open({
                animation: false,
                template: require("./languageDialogTemplate.html"),
                controllerAs: "ctrl",
                controller: require("./languageDialogController"),
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
        }

    }
};
