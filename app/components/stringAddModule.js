'use strict';
angular.module('listApp')
    .component('stringAdd', {
        bindings: {
            onAdd: '&'
        },
        templateUrl: 'components/stringAddTemplate.html',
        controller: function stringAddController($scope) {
            this.addItem = function () {
                let text = $scope.text;
                if (text){
                    this.onAdd({text: text});
                }
                $scope.text = ""
            }
        },
    });