#!/usr/bin/env node

export {};

const fs = require('fs');
const writeFile = require('../shared/services/write-file');
const fileEnum = require('../shared/enums/file-enum');

module.exports = async (projectName: string, authorName: string, description: string) => {
    console.log('project name: ', projectName);
    console.log('author name: ', authorName);
    console.log('project description: ', description);

    try {
        fs.statSync(projectName);
    }
    catch (error) { }

    const defaultDir = projectName;
    const srcDir = `${projectName}/src`;
    const configDir = `${projectName}/config`;
    const appDir = `${projectName}/app`;
    const stylesDir = `${projectName}/styles`;

    if (!fs.existsSync(defaultDir)) {
        fs.mkdirSync(defaultDir);
        fs.mkdirSync(srcDir);
        fs.mkdirSync(configDir);
        fs.mkdirSync(appDir);
        fs.mkdirSync(stylesDir);
    }

    const allFiles = await fileEnum(projectName, authorName, description);

    writeFile(fs, defaultDir, allFiles.PACKAGE);
    writeFile(fs, defaultDir, allFiles.GITIGNORE);
}