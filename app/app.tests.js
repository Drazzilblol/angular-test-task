require("angular");
require("angular-mocks");


const testsContext  = require.context('./', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);