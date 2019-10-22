#!/usr/bin/env node
"use strict";
module.exports = function () {
    return "@import './mixins.scss';\n@import './themify.scss';\n@import './spinner.scss';\n@import '../app/app.scss';";
};
