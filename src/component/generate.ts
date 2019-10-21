#!/usr/bin/env node

export {};

const fs = require('fs');
const writeFile = require('../shared/services/write-file');
const fileEnum = require('../shared/enums/file-enum');

module.exports = async (componentName: string) => {
    console.log('component name:', componentName);

    try {
        fs.statSync(componentName);
    }
    catch (error) { }

    const defaultDir = componentName;

    if (!fs.existsSync(defaultDir)) {
        fs.mkdirSync(defaultDir);
    }

    const allFiles = await fileEnum(componentName);

    writeFile(fs, defaultDir, allFiles.CLASS, componentName);
    writeFile(fs, defaultDir, allFiles.TEMPLATE);
    writeFile(fs, defaultDir, allFiles.STYLE, componentName);
}