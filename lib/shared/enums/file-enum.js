#!/usr/bin/env node
"use strict";
var fileClass = require('../files/class');
var fileTemplate = require('../files/template');
var fileScss = require('../files/scss');
var filePackage = require('../files/package');
module.exports = function (customFileName, fileDescription, fileAuthor) {
    return {
        CLASS: {
            name: null,
            extension: 'js',
            content: fileClass(customFileName)
        },
        TEMPLATE: {
            name: 'template',
            extension: 'js',
            content: fileTemplate(customFileName)
        },
        STYLE: {
            name: null,
            extension: 'scss',
            content: fileScss()
        },
        PACKAGE: {
            name: 'package',
            extension: 'json',
            content: filePackage(customFileName, fileDescription, fileAuthor)
        },
        JSDOC: {
            name: 'jsdoc',
            extension: 'json',
            content: null
        }
    };
};
