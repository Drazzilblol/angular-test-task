"use strict";
import template from "./stringListContainerTemplate.html"

export default {
    template: template,
    controller:
        function stringListController() {
            this.strings = [];

            this.addItem = string => this.strings.push(string);

            this.deleteItem = index => this.strings.splice(index, 1);
        }
};

