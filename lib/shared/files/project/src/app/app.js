#!/usr/bin/env node
"use strict";
module.exports = function () {
    return "import './app.scss';\nimport template from './template.js';\n/**\n * @class App\n * @classdesc Componente principal\n * @constructs App\n*/\nexport default class App{\n  constructor(){}\n\n  /**\n   * @description Este m\u00E9todo \u00E9 respons\u00E1vel por renderizar o projeto\n   * @memberof App\n   * @function render\n   * @example var app = new App;\n   * app.render();\n  */\n  render(){\n    document.getElementById('app').innerHTML = template.app();\n  }\n}";
};
