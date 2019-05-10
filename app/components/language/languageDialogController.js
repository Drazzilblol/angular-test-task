"use strict";

module.exports = function ($uibModalInstance, languages, $translate) {
    this.languages = languages.languagesList;
    this.selected = $translate.use();

    this.ok = function () {
        $uibModalInstance.close(this.selected);
    };

    this.cancel = function () {
        $uibModalInstance.close();
    };
};

