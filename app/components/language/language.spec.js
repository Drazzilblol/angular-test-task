"use strict";

require("../componentsModule");
let english = require("../../locales/locale-en");
let russian = require("../../locales/locale-ru");

describe("language component", () => {

    let $compile;
    let scope;
    let element;

    beforeEach(angular.mock.module("components", ($translateProvider) => {
            $translateProvider.translations("en", english);
            $translateProvider.translations("ru", russian);
            $translateProvider.preferredLanguage("en");
        }
    ));

    beforeEach(inject(($rootScope, _$compile_) => {
        scope = $rootScope;
        $compile = _$compile_;
        element = angular.element("<language/>");
        element = $compile(element)(scope);
        scope.$digest();
    }));

    it("check language select cancel", () => {
        let langButton = element.find("button")
            .triggerHandler("click");
        scope.$digest();
        let dialog = angular.element(document.querySelector(".modal-content"));
        expect(dialog.text()).toContain(english.LANGUAGE_MODAL.MESSAGE);
        expect(dialog.text()).toContain(english.LANGUAGE_MODAL.CANCEL);
        expect(dialog.text()).toContain(english.LANGUAGE_MODAL.OK);
        expect(dialog.text()).toContain(english.LANGUAGES.en);
        expect(dialog.text()).toContain(english.LANGUAGES.ru);
        dialog.find("select")
            .val("ru")
            .triggerHandler("change");
        angular.element(document.querySelector(".btn-warning"))
            .triggerHandler("click");
        scope.$digest();
        expect(langButton.text()).toContain(english.BUTTON_LANGUAGE);
    });

    it("check language select cancel", () => {
        let langButton = element.find("button")
            .triggerHandler("click");
        scope.$digest();
        let dialog = angular.element(document.querySelector(".modal-content"));
        dialog.find("select")
            .val("ru")
            .triggerHandler("change");
        angular.element(document.querySelector(".btn-primary"))
            .triggerHandler("click");
        scope.$digest();
        expect(langButton.text()).toContain(russian.BUTTON_LANGUAGE);
        langButton.triggerHandler("click");
        expect(dialog.text()).toContain(russian.LANGUAGE_MODAL.MESSAGE);
        expect(dialog.text()).toContain(russian.LANGUAGE_MODAL.CANCEL);
        expect(dialog.text()).toContain(russian.LANGUAGE_MODAL.OK);
        expect(dialog.text()).toContain(russian.LANGUAGES.en);
        expect(dialog.text()).toContain(russian.LANGUAGES.ru);
    });
});


