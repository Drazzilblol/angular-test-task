"use strict";
require("../componentsModule");
describe("string add component", () => {

    let $compile;
    let scope;
    let $translate;
    let element;

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

    beforeEach(inject(($rootScope, _$compile_, _$translate_) => {
        scope = $rootScope.$new();
        $compile = _$compile_;
        $translate = _$translate_;
        scope.onAddSpy = jasmine.createSpy("onAdd");
        element = angular.element("<string-add on-add='onAddSpy(text)'/>");
        element = $compile(element)(scope);
        scope.$digest();
    }));

    it("check add string", () => {
        let testString = "test";
        let input = element.find("input");
        input.val(testString).triggerHandler("input");
        element.find("button")
            .triggerHandler("click");
        expect(scope.onAddSpy).toHaveBeenCalledWith(testString);
    });

    it("check is add button disabled with empty input", () => {
        let button = element.find("button");
        expect(button.attr("disabled")).toEqual("disabled");
        let input = element.find("input");
        input.val("          ")
            .triggerHandler("input");
        expect(button.attr("disabled")).toEqual("disabled");
    });

    it("check localization", () => {
        let button = element.find("button");
        expect(button.text()).toContain("Add");
        $translate.use("ru");
        scope.$digest();
        expect(button.text()).toContain("Добавить");
    });
});


