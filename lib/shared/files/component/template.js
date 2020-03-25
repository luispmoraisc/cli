#!/usr/bin/env node
"use strict";
module.exports = function (name) {
    return "export default {\n    " + name + "() {\n      return //your template here;\n    }\n}";
};
