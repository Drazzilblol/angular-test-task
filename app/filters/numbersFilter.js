"use strict";

module.exports = function numbersFilter() {
    return function (input) {
        if (typeof input !== "string" || input === "") return "MESSAGE";

        let filteredArray = input.split("")
            .filter(element => !isNaN(+element));

        return filteredArray.length ? filteredArray.join("") : "MESSAGE";
    };
};



