#!/usr/bin/env node
"use strict";
module.exports = function (componentName) {
    return "export default {\n  /**\n   * Template da classe App\n   * @memberof Templates\n   * @function app     \n   * @return {String} retorna o HTML dos componentes \n  */\n  app(){\n      return `<h1>" + componentName + " run</h1>`;\n  }\n}";
};
