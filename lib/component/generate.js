#!/usr/bin/env node
"use strict";
var fs = require('fs');
var writeFile = require('../shared/services/write-file');
var fileClass = require('../shared/files/class');
var fileTemplate = require('../shared/files/template');
var fileScss = require('../shared/files/scss');
module.exports = function (componentName) {
    console.log('component name:', componentName);
    var classFile = fileClass(componentName);
    var templateFile = fileTemplate(componentName);
    var scssFile = fileScss();
    try {
        fs.statSync(componentName);
    }
    catch (error) { }
    if (!fs.existsSync(componentName)) {
        fs.mkdirSync(componentName);
    }
    writeFile(fs, componentName, classFile, 'class', 'js');
    writeFile(fs, componentName, templateFile, 'template', 'js');
    writeFile(fs, componentName, scssFile, 'style', 'scss');
};
