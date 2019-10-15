#!/usr/bin/env node

const fs = require('fs');
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

    fs.writeFile(`./${componentName}/${componentName}.js`, classFile, (error: Error) => {
        if (error) {
            console.log(error);
        };
        console.log(`Created a new javascript in component.`);
    });

    fs.writeFile(`./${componentName}/template.js`, templateFile, (error: Error) => {
        if (error) {
            console.log(error);
        };
        console.log(`Created a new template in component.`);
    });

    fs.writeFile(`./${componentName}/${componentName}.scss`, scssFile, (error: Error) => {
        if (error) {
            console.log(error);
        };
        console.log(`Created a new scss in component.`);
    });
}