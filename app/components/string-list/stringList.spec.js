"use strict";
require("../componentsModule");

describe("string list", () => {
    let $compile;
    let scope;
    let $translate;
    let element;
    let enLoc = {
        MESSAGE: "String does not contains numbers",
        BUTTON_DELETE: "Delete",
    };
    let ruLoc = {
        MESSAGE: "Строка не содержит цифры",
        BUTTON_DELETE: "Удалить",
    };

    beforeEach(angular.mock.module("components", ($translateProvider) => {
        $translateProvider.translations("en", enLoc);
        $translateProvider.translations("ru", ruLoc);
        $translateProvider.preferredLanguage("en");
    }));

    beforeEach(inject(($rootScope, _$compile_, _$translate_) => {
        scope = $rootScope.$new();
        $compile = _$compile_;
        $translate = _$translate_;
        scope.onDeleteSpy = jasmine.createSpy("onDelete");
        element = angular.element("<strings-list on-delete='onDeleteSpy(0)' strings='strings'/>");
        element = $compile(element)(scope);
    }));


    describe("string list component", () => {

        it("check string with numbers", () => {
            let testStrings = ["t1e2s3t4"];
            let resultString = "1234";
            scope.strings = testStrings;
            scope.$digest();
            expect(element.text()).toContain(resultString);
        });

        it("check items deleting", () => {
            let testStrings = ["12345"];
            let resultString = "12345";
            scope.strings = testStrings;
            scope.$digest();
            expect(element.text()).toContain(resultString);
            element.find("button")
                .triggerHandler("click");
            expect(scope.onDeleteSpy).toHaveBeenCalledWith(0);
            scope.strings.splice(0, 1);
            scope.$digest();
            expect(element.text()).not.toContain(resultString);
        });

        it("check string without numbers", () => {
            scope.strings = ["test"];
            scope.$digest();
            expect(element.text()).toContain(enLoc.MESSAGE);
            $translate.use("ru");
            scope.$digest();
            expect(element.text()).toContain(ruLoc.MESSAGE);
        });

        it("check delete button localization", () => {
            scope.strings = ["test"];
            scope.$digest();
            let delButton = element.find("button")
                .triggerHandler("click");
            expect(delButton.text()).toContain(enLoc.BUTTON_DELETE);
            $translate.use("ru");
            scope.$digest();
            expect(delButton.text()).toContain(ruLoc.BUTTON_DELETE);
        });
    });
});


