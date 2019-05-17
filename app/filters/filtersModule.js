"use strict";
import numbersFilter from "./numbersFilter";

export default angular.module("filters", [])
    .filter("numbersFilter", numbersFilter);

