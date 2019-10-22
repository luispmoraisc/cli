#!/usr/bin/env node
"use strict";
module.exports = function () {
    return "var testsContext = require.context('./src/', true, /-test.js$/);\ntestsContext.keys().forEach(testsContext);\n\nvar srcContext = require.context('./src/', true, /^((?!__tests__).)*.js$/);\nsrcContext.keys().forEach(srcContext);";
};
