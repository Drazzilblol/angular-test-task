const webpackConf = require("./webpack.config");

module.exports = config => {
    config.set({
        basePath: "",
        frameworks: ["jasmine"],

        files: ["./app/app.tests.js"],

        preprocessors: {
            "./app/app.tests.js": ['webpack',],
        },

        webpack: webpackConf,

        port: 9876,
        colors: true,
        autoWatch: true,
        browsers: ["Chrome"],
    });
};