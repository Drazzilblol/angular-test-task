'use strict';

describe('delete string', function () {
    let stringList = element(by.id("string-list"));
    let deleteButton = element.all(by.css(".btn-right-delete")).get(0);

    it('delete from list', function () {
        deleteButton.click();
        expect(stringList.getText()).not.toContain("123");
    });
});

