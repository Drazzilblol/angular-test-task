"use strict";
app.component("stringsListController", {
    templateUrl: "components/string-list-container/stringListContainerTemplate.html",
    controller: function stringListController() {
        this.strings = [];

        this.addItem = string =>  this.strings.push(string);

        this.deleteItem = index => this.strings.splice(index, 1);
    },
});