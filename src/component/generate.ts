#!/usr/bin/env node

const fs = require('fs');
const writeFile = require('../shared/services/write-file');
const fileEnum = require('../shared/enums/file-enum');

module.exports = (componentName: string) => {
    console.log('component name:', componentName);

    try {
        fs.statSync(componentName);
    }
    catch (error) { }

    if (!fs.existsSync(componentName)) {
        fs.mkdirSync(componentName);
    }

    writeFile(fs, componentName, fileEnum.CLASS);
    writeFile(fs, componentName, fileEnum.TEMPLATE);
    writeFile(fs, componentName, fileEnum.STYLE);
}