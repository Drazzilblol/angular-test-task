'use strict';
app.component('stringAdd', {
    templateUrl: 'components/string-add/stringAddTemplate.html',
    controller: ['stringService', function stringAddController(stringService) {
        this.onAdd = string => stringService.setString(string)
    }]
});
