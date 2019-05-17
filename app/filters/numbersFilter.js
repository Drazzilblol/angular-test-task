"use strict";

export default function numbersFilter() {
    return input => {
        if (typeof input !== "string" || input === "") return "MESSAGE";

        let filteredArray = input.split("")
            .filter(element => !isNaN(+element));

        return filteredArray.length ? filteredArray.join("") : "MESSAGE";
    };
};



