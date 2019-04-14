'use strict';
angular
    .module('listApp')
    .filter('numbersFilter', function ($filter) {
    return function (input) {
        let arr = input.split('');

        let filteredArray = arr.filter(function(element) {
            return !isNaN(+element);
        });

        return filteredArray.join('') ? filteredArray.join(''): $filter('translate')('MESSAGE')  ;
    };
});

