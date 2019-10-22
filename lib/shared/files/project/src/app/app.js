#!/usr/bin/env node
"use strict";
module.exports = function () {
    return "import 'core-js';\nimport template from './template.js';\nimport '../styles/main.scss';\n/**\n * @class App\n * @classdesc Componente principal\n*/\nexport default class App{\n    constructor(){}\n\n    /**\n     * Este m\u00E9todo \u00E9 respons\u00E1vel por renderizar o projeto     \n     * \n     * @memberof App\n     * @function render\n     * @example var app = new App;\n     * app.render();\n    */\n    render(){\n        document.getElementById('app').innerHTML = template.app();\n    }\n}";
};
