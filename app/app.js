'use strict';

let app = angular.module('listApp', ['pascalprecht.translate']);

app.config(function ($translateProvider) {
    $translateProvider
        .useStaticFilesLoader({
            prefix: 'locales/locale-',
            suffix: '.json'
        })
        .useSanitizeValueStrategy('sanitizeParameters')
        .preferredLanguage('en');
});

app.controller('Ctrl', function ($scope, $rootScope, $translate) {

    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };
});

