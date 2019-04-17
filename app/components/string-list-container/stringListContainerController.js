'use strict';
app.component('stringsListController', {
    templateUrl: 'components/string-list-container/stringListContainerTemplate.html',
    controller: function stringListController() {
        this.strings = [];

        this.addItem = function (string) {
            this.strings.push(string);
        };

        this.deleteItem = function (index) {
            this.strings.splice(index, 1);
        }
    },
});