'use strict';
angular.module('listApp')
    .component('stringsList', {
        templateUrl: 'components/stringListTemplate.html',
        bindings: {
            strings: '<',
            onDelete: '&'
        },
        controller: function stringListController() {
            this.deleteItem = function (index) {
                this.onDelete({index: index})
            }
        }
    });