#!/usr/bin/env node
"use strict";
var fileClass = require('../files/class');
var fileTemplate = require('../files/template');
var fileScss = require('../files/scss');
var fileTypes = {
    CLASS: {
        type: 'class',
        extension: 'js',
        content: fileClass
    },
    TEMPLATE: {
        type: 'template',
        extension: 'js',
        content: fileTemplate
    },
    STYLE: {
        type: 'style',
        extension: 'scss',
        content: fileScss
    }
};
module.exports = fileTypes;
