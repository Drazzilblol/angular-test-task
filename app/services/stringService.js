app.factory('stringService', function () {
    let service = {};
    let callback;

    service.notifyChanges = str => {
        callback(str)
    };

    service.registerObserver = cb => {
        callback = cb;
    };

    service.unregisterObserver = () => {
        callback = null;
    };

    return service;
});