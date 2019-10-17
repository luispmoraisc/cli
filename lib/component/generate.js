#!/usr/bin/env node
"use strict";
var fs = require('fs');
var writeFile = require('../shared/services/write-file');
var fileEnum = require('../shared/enums/file-enum');
// const fileClass = require('../shared/files/class');
// const fileTemplate = require('../shared/files/template');
// const fileScss = require('../shared/files/scss');
module.exports = function (componentName) {
    console.log('component name:', componentName);
    // let classFile = fileClass(componentName);
    // let templateFile = fileTemplate(componentName);
    // let scssFile = fileScss();
    try {
        fs.statSync(componentName);
    }
    catch (error) { }
    if (!fs.existsSync(componentName)) {
        fs.mkdirSync(componentName);
    }
    // writeFile(fs, componentName, classFile, 'class', 'js');
    // writeFile(fs, componentName, templateFile, 'template', 'js');
    // writeFile(fs, componentName, scssFile, 'style', 'scss');
    writeFile(fs, componentName, fileEnum.CLASS);
    writeFile(fs, componentName, fileEnum.TEMPLATE);
    writeFile(fs, componentName, fileEnum.STYLE);
};
