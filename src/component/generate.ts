#!/usr/bin/env node

export {};

const fs = require('fs');
const writeFile = require('../shared/services/write-file');
const fileEnum = require('../shared/enums/file-enum');

module.exports = async (componentName: string) => {
    try {
        fs.statSync(componentName);
    }
    catch (error) { }

    const defaultDir = componentName;

    if (!fs.existsSync(defaultDir)) {
        fs.mkdirSync(defaultDir);
    }

    const allFiles = await fileEnum(componentName);

    writeFile(fs, defaultDir, allFiles.COMPONENT_CLASS, componentName);
    writeFile(fs, defaultDir, allFiles.COMPONENT_TEMPLATE);
    writeFile(fs, defaultDir, allFiles.COMPONENT_STYLE, componentName);
}