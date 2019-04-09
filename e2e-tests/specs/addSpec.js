'use strict';

describe('string add', function () {
    let input = element(by.id("string-input"));
    let addButton = element(by.id("string-add-button"));
    let stringList = element(by.id("string-list"));

    beforeAll(function () {
        browser.get("http://localhost:8000");
    });

    it('add to list', function () {
        input.sendKeys("test123");
        addButton.click();
        expect(stringList.getText()).toContain("123");
        expect(input.getText()).toBe("");
    });

    it('add to list string without numbers', function () {
        input.sendKeys("test");
        addButton.click();
        expect(stringList.getText()).toContain("String does not contains numbers");
        expect(input.getText()).toBe("");
    });

});

