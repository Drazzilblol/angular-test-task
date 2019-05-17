"use strict";

export default function ($uibModalInstance, languages, $translate) {
    this.languages = languages.languagesList;
    this.selected = $translate.use();

    this.ok = () => {
        $uibModalInstance.close(this.selected);
    };

    this.cancel = () => {
        $uibModalInstance.close();
    };
};

