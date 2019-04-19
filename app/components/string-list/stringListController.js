'use strict';
app.component('stringsList', {
    templateUrl: 'components/string-list/stringListTemplate.html',

    controller: ['stringService', function (stringService) {
        this.strings = [];

        this.onDelete = index => this.strings.splice(index, 1);
        stringService.registerObserver(str => this.strings.push(str));
        
        this.$onDestroy = function () {
            stringService.unregisterObserver()
        }
    }]
});