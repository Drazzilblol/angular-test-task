import filters from "./filtersModule"

beforeEach(angular.mock.module("filters"));

describe("number filter", () => {

    let $filter;

    beforeEach(inject((_$filter_) => {
            $filter = _$filter_;
        })
    );

    it("should convert string with numbers and letters to string with only numbers", () => {
        expect($filter("numbersFilter")("a1b2c3")).toEqual("123");
    });
    it("should return message if string does not contain numbers", () => {
        expect($filter("numbersFilter")("abc")).toEqual("MESSAGE");
    });
    it("should return message if string is empty", () => {
        expect($filter("numbersFilter")("")).toEqual("MESSAGE");
    });

});


