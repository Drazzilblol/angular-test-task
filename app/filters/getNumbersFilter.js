'use strict';
angular
    .module('listApp')
    .filter('numbersFilter', function () {
    return function (input) {
        let arr = input.split('');

        let filteredArray = arr.filter(function(element) {
            return !isNaN(+element);
        });

        return filteredArray.join('') ? filteredArray.join(''): "String does not contains numbers"  ;
    };
});

