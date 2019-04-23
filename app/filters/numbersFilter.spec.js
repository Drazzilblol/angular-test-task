import filters from "./filtersModule"

beforeEach(angular.mock.module("filters"));

describe('filters', function () {

    let $filter;

    beforeEach(function () {
        inject(function (_$filter_) {
            $filter = _$filter_;
        });
    });

    it('should convert string with numbers and letters to string with only numbers', function () {
        expect($filter('numbersFilter')("a1b2c3")).toEqual("123");
    });
    it('should return message if string does not contain numbers', function () {
        expect($filter('numbersFilter')("abc")).toEqual("MESSAGE");
    });
    it('should return message if string is empty', function () {
        expect($filter('numbersFilter')("")).toEqual("MESSAGE");
    });

});


