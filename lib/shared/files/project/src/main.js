#!/usr/bin/env node
"use strict";
module.exports = function () {
    return "import App from './app/app.js';\n\nwindow.app = new App();\napp.render();";
};
