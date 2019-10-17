#!/usr/bin/env node

const fs = require('fs');
const writeFile = require('../shared/services/write-file');
const fileClass = require('../shared/files/class');
const fileTemplate = require('../shared/files/template');
const fileScss = require('../shared/files/scss');

module.exports = (componentName: string) => {
    console.log('component name:', componentName);
    
    let classFile = fileClass(componentName);
    let templateFile = fileTemplate(componentName);
    let scssFile = fileScss();

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
}