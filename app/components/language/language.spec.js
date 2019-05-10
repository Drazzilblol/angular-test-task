"use strict";

let english = require("../../locales/locale-en");
let russian = require("../../locales/locale-ru");

describe("language", function () {
    let scope;
    let element;

    beforeEach(angular.mock.module("listApp"));

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new();
        element = $compile(angular.element("<language/>"))(scope);
        scope.$digest();
    }));

    describe("component", function () {
        it("check language select cancel", function () {
            let langButton = element.find("button")
                .triggerHandler("click");
            scope.$digest();

            let dialogDomElement = document.querySelector(".modal-content");
            let languageSelect = dialogDomElement.getElementsByTagName("select")[0];
            expect(dialogDomElement.querySelector(".modal-title").textContent).toBe(english.LANGUAGE_MODAL.MESSAGE);
            expect(dialogDomElement.querySelector(".btn-secondary").textContent).toBe(english.LANGUAGE_MODAL.CANCEL);
            expect(dialogDomElement.querySelector(".btn-primary").textContent).toBe(english.LANGUAGE_MODAL.OK);
            expect(languageSelect.textContent).toContain(english.LANGUAGES.en);
            expect(languageSelect.textContent).toContain(english.LANGUAGES.ru);
            angular.element(languageSelect)
                .val("ru")
                .triggerHandler("change");
            dialogDomElement.querySelector(".btn-secondary")
                .click();
            scope.$digest();
            expect(langButton.text()).toBe(english.BUTTON_LANGUAGE);
        });

        it("check language select accept", function () {
            let langButton = element.find("button")
                .triggerHandler("click");
            scope.$digest();
            let dialogDomElement = document.querySelector(".modal-content");
            let languageSelect = dialogDomElement.getElementsByTagName("select")[0];
            angular.element(languageSelect)
                .val("ru")
                .triggerHandler("change");
            dialogDomElement.querySelector(".btn-primary")
                .click();

            scope.$digest();
            expect(langButton.text()).toBe(russian.BUTTON_LANGUAGE);

            langButton.triggerHandler("click");
            scope.$digest();

            expect(dialogDomElement.querySelector(".modal-title").textContent).toBe(russian.LANGUAGE_MODAL.MESSAGE);
            expect(dialogDomElement.querySelector(".btn-secondary").textContent).toBe(russian.LANGUAGE_MODAL.CANCEL);
            expect(dialogDomElement.querySelector(".btn-primary").textContent).toBe(russian.LANGUAGE_MODAL.OK);
            expect(languageSelect.textContent).toContain(russian.LANGUAGES.en);
            expect(languageSelect.textContent).toContain(russian.LANGUAGES.ru);
        });
    });
});



