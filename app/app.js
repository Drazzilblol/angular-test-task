'use strict';

let app = angular.module('listApp', ['pascalprecht.translate']);

app.config(function ($translateProvider) {
    $translateProvider
        .useStaticFilesLoader({
            prefix: 'locales/locale-',
            suffix: '.json'
        })
        // remove the warning from console log by putting the sanitize strategy
        .useSanitizeValueStrategy('sanitizeParameters')
        .preferredLanguage('en');
});

app.run(['$rootScope', function($rootScope) {
    $rootScope.lang = 'en';
}])

app.controller('Ctrl', function ($scope, $rootScope, $translate) {

    $scope.changeLanguage = function (key) {
        $rootScope.lang = key;
        $translate.use(key);
    };
});

