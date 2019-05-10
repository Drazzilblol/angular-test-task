"use strict";

describe("string list", function () {
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

    beforeEach(angular.mock.module("listApp"));

    beforeEach(inject(function ($rootScope, $compile, _$translate_) {
        scope = $rootScope.$new();
        $translate = _$translate_;
        scope.onDeleteSpy = jasmine.createSpy("onDelete");
        element = $compile(angular.element("<strings-list on-delete='onDeleteSpy(index)' strings='strings'/>"))(scope);
    }));

    describe("component", function () {

        it("check string with numbers", function () {
            let testStrings = ["t1e2s3t4"];
            let resultString = "1234";
            scope.strings = testStrings;

            scope.$digest();
            expect(element.find("li")
                .find("span")
                .text()).toBe(resultString);
        });

        it("check items deleting", function () {
            let resultString = "12345";
            scope.strings = [resultString];

            scope.$digest();
            let firstElement = element.find("li");
            expect(firstElement
                .find("span")
                .text()).toBe(resultString);

            firstElement.find("button")
                .triggerHandler("click");
            expect(scope.onDeleteSpy).toHaveBeenCalledWith(0);

            scope.strings.splice(0, 1);
            scope.$digest();
            expect(element.find("li")
                .find("span")
                .text()).not.toBe(resultString);
        });

        it("check string without numbers", function () {
            scope.strings = ["test"];

            scope.$digest();
            let firstElement = element.find("li");
            expect(firstElement
                .find("span")
                .text()).toBe(enLoc.MESSAGE);

            $translate.use("ru");
            scope.$digest();
            expect(firstElement
                .find("span")
                .text()).toBe(ruLoc.MESSAGE);
        });

        it("check delete button localization", function () {
            scope.strings = ["test"];

            scope.$digest();
            let delButton = element.find("li")
                .find("button")
                .triggerHandler("click");
            expect(delButton.text()).toBe(enLoc.BUTTON_DELETE);

            $translate.use("ru");
            scope.$digest();
            expect(delButton.text()).toBe(ruLoc.BUTTON_DELETE);
        });
    });
});


