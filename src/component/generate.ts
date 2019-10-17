#!/usr/bin/env node

export {};

const fs = require('fs');
const writeFile = require('../shared/services/write-file');
const fileEnum = require('../shared/enums/file-enum');

module.exports = (componentName: string) => {
    console.log('component name:', componentName);

    try {
        fs.statSync(componentName);
    }
    catch (error) { }

    const defaultDir = componentName;

    if (!fs.existsSync(defaultDir)) {
        fs.mkdirSync(defaultDir);
    }

    writeFile(fs, defaultDir, fileEnum(componentName).CLASS, componentName);
    writeFile(fs, defaultDir, fileEnum(componentName).TEMPLATE);
    writeFile(fs, defaultDir, fileEnum(componentName).STYLE, componentName);
}