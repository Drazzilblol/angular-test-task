"use strict";
import languages from "./languages.js";
import template from "./languageTemplate.html"
import dialogController from "./dialog/languageDialogController";
import dialogTemplate from "./dialog/languageDialogTemplate.html"

export default {
    template: template,
    controller: function languageController($translate, $uibModal) {

        this.open = function () {

            $uibModal.open({
                animation: false,
                template: dialogTemplate,
                controllerAs: "ctrl",
                controller: dialogController,
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
