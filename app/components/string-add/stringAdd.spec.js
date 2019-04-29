"use strict";
require("../componentsModule");
describe("string add", () => {
    beforeEach(angular.mock.module("components", ($translateProvider) => {
            $translateProvider.translations("en", {
                BUTTON_ADD: "Add",
            });
            $translateProvider.translations("ru", {
                BUTTON_ADD: "Добавить",
            });
            $translateProvider.preferredLanguage("en");
        }
    ));

    let $compile;
    let scope;
    let $translate;
    let element;

    beforeEach(inject(($rootScope, _$compile_, _$translate_) => {
        scope = $rootScope.$new();
        $compile = _$compile_;
        $translate = _$translate_;
        scope.onAddSpy = jasmine.createSpy("onAdd");
        element = angular.element("<string-add on-add='onAddSpy(text)'/>");
        element = $compile(element)(scope);
        scope.$digest();
    }));

    describe("string add component", () => {

        it("check is add button disabled with empty input", () => {
            let button = element.find("button");
            expect(button.attr("disabled")).toEqual("disabled");
            let input = element.find("input");
            input.val("          ")
                .triggerHandler("input");
            expect(button.attr("disabled")).toEqual("disabled");
        });

        it("check add string", () => {
            let testString = "test";
            let input = element.find("input");
            input.val(testString).triggerHandler("input");
            element.find("button")
                .triggerHandler("click");
            expect(scope.onAddSpy).toHaveBeenCalledWith(testString);
        });

        it("check localization", () => {
            let button = element.find("button");
            expect(button.text()).toContain("Add");
            $translate.use("ru");
            scope.$digest();
            expect(button.text()).toContain("Добавить");
        });
    });
});


