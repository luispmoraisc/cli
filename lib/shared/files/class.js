#!/usr/bin/env node
"use strict";
module.exports = function (name) {
    var capitalize = firstChar(name);
    return "import template from \"./template.js\";\nimport \"./" + name + ".scss\";\n\n/**\n* @class " + capitalize + "\n* @classdesc component/class " + capitalize + "\n*/\n\nexport default class " + capitalize + " {\n    constructor() {\n        this._defaultSelector = \"component-" + name + "\";\n    }\n\n    render() {\n\n    }\n}";
};
function firstChar(str) {
    return str.charAt(0).toUpperCase() + str.substring(1, str.length);
}
