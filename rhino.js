common.hookAllMethods('com.miui.permcenter.privacymanager.g', 'n', function (params) {
}, function (params) {
    // common.log("after");
}, function (params) {
    // common.log("replace");
    common.callMethod(params.thisObject, 'd', [true,]);
    return common.thisMethod(params);
});