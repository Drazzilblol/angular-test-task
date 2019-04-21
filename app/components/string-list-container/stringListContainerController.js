"use strict";

module.exports = {
    template: require("./stringListContainerTemplate.html"),
    controller:
        function stringListController() {
            this.strings = [];

            this.addItem = string => this.strings.push(string);

            this.deleteItem = index => this.strings.splice(index, 1);
        }
};

