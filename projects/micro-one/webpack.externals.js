const webpack = require('webpack');

module.exports = {
    "externals": {
        "rxjs": "rxjs",
        "@angular/core": "ng.core",
        "@angular/common": "ng.common",
        "@angular/common/http": "ng.common.http",
        "@angular/platform-browser": "ng.platformBrowser",
        "@angular/platform-browser-dynamic": "ng.platformBrowserDynamic",
        "@angular/compiler": "ng.compiler",
        "@angular/elements": "ng.elements",
        "@angular/material": "ng.material",
        "@angular/material/card": "ng.material.card",
        // Uncomment and add to scripts in angular.json if needed
        // "@angular/router": "ng.router",
        // "@angular/forms": "ng.forms"
    }
}