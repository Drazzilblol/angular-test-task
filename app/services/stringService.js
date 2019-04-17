app.factory('stringService', function () {
    let string = "";
    let service = {};

    service.getString = () => string;

    service.setString = str => string = str;

    return service;
});