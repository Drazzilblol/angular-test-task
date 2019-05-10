"use strict";
require("./filtersModule");

beforeEach(angular.mock.module("listApp"));

describe("number filter", function () {

    let $filter;

    beforeEach(inject(function (_$filter_) {
            $filter = _$filter_;
        })
    );

    it("should convert string with numbers and letters to string with only numbers", function () {
        expect($filter("numbersFilter")("a1b2c3")).toBe("123");
    });
    it("should return message if string does not contain numbers", function () {
        expect($filter("numbersFilter")("abc")).toBe("MESSAGE");
    });
    it("should return message if string is empty", function () {
        expect($filter("numbersFilter")("")).toBe("MESSAGE");
    });

});


