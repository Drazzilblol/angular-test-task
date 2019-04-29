"use strict";
require("../componentsModule");

describe("string list container", function () {
    let $compile;
    let scope;
    let element;

    beforeEach(angular.mock.module("components", ($translateProvider) => {
        $translateProvider.preferredLanguage("en");
    }));

    beforeEach(inject(($rootScope, _$compile_) => {
        scope = $rootScope.$new();
        $compile = _$compile_;
        element = angular.element("<strings-list-container/>");
        element = $compile(element)(scope);
    }));

    describe("string list container component", function () {

        it('check add item', function () {
            let testString = "12345";
            let stringAdd = element.find("string-add");
            stringAdd.find("input")
                .val(testString)
                .triggerHandler("input");
            stringAdd.find("button")
                .triggerHandler("click");
            expect(element.find("li")
                .text()).toContain(testString);
        });

        it('check delete item', function () {
            let testStrings = ["12345"];
            let resultString = "12345";
            scope.strings = testStrings;
            scope.$digest();
            element.find("li")
                .find("button")
                .triggerHandler("click");
            expect(element.find("li")
                .text()).not.toContain(resultString);
        });
    });
});


