#!/usr/bin/env node
"use strict";
module.exports = function () {
    return "module.exports = () => {\n  const objEntry = {\n    main: `./src/main.js`,\n  };\n  return objEntry;\n};\n";
};
