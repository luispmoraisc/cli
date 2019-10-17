#!/usr/bin/env node

const fileClass = require('../files/class');
const fileTemplate = require('../files/template');
const fileScss = require('../files/scss');

const fileTypes = {
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
}

module.exports = fileTypes;