'use strict';
app.component('stringsList', {
    templateUrl: 'components/string-list/stringListTemplate.html',

    controller: ['stringService', function (stringService) {
        this.strings = [];

        this.onDelete = index => this.strings.splice(index, 1);

        this.$doCheck = function () {
            if (stringService.getString() !== "") {
                this.strings.push(stringService.getString())
                stringService.setString("")
            }
        }
    }]
});