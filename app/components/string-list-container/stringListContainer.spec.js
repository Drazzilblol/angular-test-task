"use strict";

describe("string list container", function () {
    let scope;
    let element;

    beforeEach(angular.mock.module("listApp"));

    beforeEach(inject(($rootScope, $compile) => {
        scope = $rootScope.$new();
        element = $compile(angular.element("<strings-list-container/>"))(scope);
    }));

    describe("component", function () {

        it('check add item', function () {
            let testString = "12345";
            let stringAdd = element.find("string-add");

            stringAdd.find("input")
                .val(testString)
                .triggerHandler("input");
            stringAdd.find("button")
                .triggerHandler("click");
            expect(element.find("li")
                .find("span")
                .text())
                .toBe(testString);
        });

        it('check delete item', function () {
            let resultString = "12345";
            scope.strings = [resultString];

            scope.$digest();
            element.find("li")
                .find("button")
                .triggerHandler("click");
            expect(element.find("li")
                .find("span")
                .text()).not.toBe(resultString);
        });
    });
});


