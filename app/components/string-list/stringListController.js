'use strict';
app.component('stringsList', {
    templateUrl: 'components/string-list/stringListTemplate.html',
    bindings: {
        strings: '<',
        onDelete: '&'
    }
});