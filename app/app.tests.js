import "./app.js";
import "angular-mocks";
import config from "./testsConfig";

angular.module("listApp")
    .config(["$translateProvider", config]);

let testsContext = require.context('./', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
