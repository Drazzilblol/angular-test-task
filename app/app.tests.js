require("./app.js");
require("angular-mocks");
let config = require("./testsConfig");

angular.module("listApp")
    .config(["$translateProvider", config]);

let testsContext = require.context('./', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
