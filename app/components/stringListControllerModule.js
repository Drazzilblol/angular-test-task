'use strict';
angular.module('listApp')
    .component('stringsListController', {
        templateUrl: 'components/stringListControllerTemplate.html',
        controller: function stringListController() {
            this.strings = [];

            this.addItem = function (string) {
                this.strings.push(string);
            };
            this.getItems = function () {
                return this.strings
            };

            this.deleteItem = function (index) {
                console.log(index)
                this.strings.splice(index, 1);
            }
        },
    });