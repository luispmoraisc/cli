#!/usr/bin/env node
"use strict";
module.exports = function () {
    return "module.exports = ( entry ) => {\n    let stringEntry = `./src/${entry}.js`;\n    let objEntry = {};\n    objEntry[entry] = stringEntry;\n    return objEntry;\n}";
};
