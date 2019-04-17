'use strict';
app.filter('numbersFilter', function () {
    return function (input) {
        if (input === undefined || input === "") return 'MESSAGE';

        let filteredArray = input.split('')
            .filter(function (element) {
                return !isNaN(+element);
            });

        return filteredArray.length ? filteredArray.join('') : 'MESSAGE';
    };
});

