cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
        "id": "cordova-plugin-x-toast.Toast",
        "clobbers": [
            "window.plugins.toast"
        ]
    },
    {
        "file": "plugins/cordova-plugin-x-toast/test/tests.js",
        "id": "cordova-plugin-x-toast.tests"
    },
    {
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.plugin.datepicker/www/datepicker.js",
        "id": "org.apache.cordova.plugin.datepicker.Datepicker",
        "clobbers": [
            "window.plugins.datePicker"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-x-toast": "2.4.2",
    "cordova-sqlite-storage": "0.8.4-dev",
    "org.apache.cordova.plugin.datepicker": "1.0.0"
}
// BOTTOM OF METADATA
});